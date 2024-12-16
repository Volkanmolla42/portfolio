import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { techIcons } from "./techIcons";

const JumpingCubes = () => {
  // Refs for engine, render, and cubes
  const scene = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
  const cubesRef = useRef([]);
  useEffect(() => {
    const engine = engineRef.current;
    engine.gravity.y = 1; // Set gravity direction

    const runner = Matter.Runner.create(); // Create a Matter.js runner
    Matter.Runner.run(runner, engine); // Start the runner to simulate the engine

    const sceneWidth = 350;
    const sceneHeight = 180;
    const wallThickness = 20;

    // Create the render object for visualizing the simulation
    const render = Matter.Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: sceneWidth,
        height: sceneHeight,
        wireframes: false, // Render without wireframes
        background: "transparent", // Transparent background
      },
    });

    renderRef.current = render;
    Matter.Render.run(render); // Start the render loop

    // Create ground for the simulation
    const ground = Matter.Bodies.rectangle(
      sceneWidth / 2,
      sceneHeight + wallThickness / 2 - 4,
      sceneWidth,
      wallThickness,
      {
        isStatic: true, // Static body (doesn't move)
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 1,
        },
      }
    );

    // Define walls for the simulation environment
    const walls = [
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: { lineWidth: 1 },
        }
      ),
      Matter.Bodies.rectangle(
        sceneWidth + wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: { lineWidth: 1 },
        }
      ),
      Matter.Bodies.rectangle(
        sceneWidth / 2,
        -wallThickness / 2,
        sceneWidth,
        wallThickness,
        {
          isStatic: true,
          render: { lineWidth: 1 },
        }
      ),
    ];

    // Define size for the cubes
    const cubeSize = 40;

    // Create cubes based on tech icons
    const cubes = techIcons.map((tech, index) => {
      // Create a rectangular body for each cube
      const cube = Matter.Bodies.rectangle(
        20 + index * 20,
        20,
        cubeSize,
        cubeSize,
        {
          restitution: 0.5, // Bounciness
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 2,
          },
        }
      );

      // Create a data URL for the SVG using the svgPath
      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${cubeSize}" height="${cubeSize}" viewBox="0 0 24 24">
          <path fill="${tech.color}" d="${tech.svgPath}" />
        </svg>`;
      const encodedSvg = `data:image/svg+xml;utf8,${encodeURIComponent(
        svgString
      )}`;

      // Create a circle body for the icon
      const iconBody = Matter.Bodies.circle(
        cube.position.x,
        cube.position.y,
        cubeSize / 4, // Adjust size of the icon
        {
          isSensor: true, // Treat as a sensor (no physical interaction)
          render: {
            sprite: {
              texture: encodedSvg,
            },
          },
        }
      );

      // Return the composite body with the cube and icon
      return Matter.Body.create({
        parts: [cube, iconBody],
      });
    });

    // Save references to the created cubes
    cubesRef.current = cubes;

    // Add the ground, walls, and cubes to the Matter.js world
    Matter.World.add(engine.world, [ground, ...walls, ...cubes]);

    // Cleanup function to stop the simulation and cleanup when component unmounts
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {}; // Clear textures to prevent memory leaks
    };
  }, []); // Empty dependency array means this effect runs once on mount

  // Handle the jumping action when user clicks on the scene
  const handleJump = () => {
    cubesRef.current.forEach((cube) => {
      const forceX = (Math.random() - 0.5) * 0.08; // Random force in X direction
      const forceY = -0.04; // Fixed upward force
      Matter.Body.applyForce(cube, cube.position, { x: forceX, y: forceY }); // Apply force to cubes
    });
  };

  return (
    <div
      className="transition-all duration-200 relative overflow-hidden rounded-md backdrop-blur-sm bg-white bg-opacity-10 shadow-md hover:shadow-sm hover:shadow-zinc-900 shadow-zinc-900 cursor-pointer"
      onClick={handleJump} // Trigger jump on click
      ref={scene}
    ></div>
  );
};

export default JumpingCubes;
