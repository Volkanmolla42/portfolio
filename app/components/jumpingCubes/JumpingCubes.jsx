import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { techIcons } from "../utils/techIcons";
import "./style.css";
const JumpingCubes = () => {
  const scene = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
  const cubesRef = useRef([]);

  useEffect(() => {
    const engine = engineRef.current;
    engine.gravity.y = 1;

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const sceneWidth = 350;
    const sceneHeight = 180;
    const wallThickness = 20;

    const render = Matter.Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: sceneWidth,
        height: sceneHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    renderRef.current = render;
    Matter.Render.run(render);

    const ground = Matter.Bodies.rectangle(
      sceneWidth / 2,
      sceneHeight + wallThickness / 2 - 4,
      sceneWidth,
      wallThickness,
      {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 1,
        },
      }
    );

    const walls = [
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: {
            lineWidth: 1,
          },
        }
      ),
      Matter.Bodies.rectangle(
        sceneWidth + wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: {
            lineWidth: 1,
          },
        }
      ),
      Matter.Bodies.rectangle(
        sceneWidth / 2,
        -wallThickness / 2,
        sceneWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            lineWidth: 1,
          },
        }
      ),
    ];

    const cubeSize = 40;

    const cubes = techIcons.map((tech, index) => {
      const cube = Matter.Bodies.rectangle(
        20 + index * 20,
        20,
        cubeSize,
        cubeSize,
        {
          restitution: 0.5,
          render: {
            fillStyle: "transparent",
            strokeStyle: "transparent",
            lineWidth: 2,
          },
        }
      );

      const IconComponent = tech.Icon;
      const iconSvg = IconComponent().props.children[0].props.d;

      const iconBody = Matter.Bodies.circle(
        cube.position.x,
        cube.position.y,
        cubeSize / 4,
        {
          isSensor: true,
          render: {
            sprite: {
              texture: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${cubeSize}" height="${cubeSize}" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                tech.color
              )}" d="${encodeURIComponent(iconSvg)}"/></svg>`,
            },
          },
        }
      );

      return Matter.Body.create({
        parts: [cube, iconBody],
      });
    });

    cubesRef.current = cubes;

    Matter.World.add(engine.world, [ground, ...walls, ...cubes]);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  const handleJump = () => {
    cubesRef.current.forEach((cube) => {
      const forceX = (Math.random() - 0.5) * 0.08;
      const forceY = -0.04;
      Matter.Body.applyForce(cube, cube.position, { x: forceX, y: forceY });
    });
  };

  return (
    <div
      className="transition-all duration-200 relative overflow-hidden rounded-md   backdrop-blur-sm bg-white bg-opacity-10 shadow-md  hover:shadow-sm hover:shadow-zinc-900 shadow-zinc-900 cursor-pointer"
      onClick={handleJump}
      ref={scene}
    ></div>
  );
};

export default JumpingCubes;
