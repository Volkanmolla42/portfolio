import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import "./style.css";

const JumpingCubes = () => {
  const scene = useRef(null);
  const engineRef = useRef(Matter.Engine.create());
  const renderRef = useRef(null);
  const cubesRef = useRef([]); // Küpler için referans ekledik
  const jumpIntervalRef = useRef(null); // Zıplama intervali için referans

  useEffect(() => {
    const engine = engineRef.current;
    engine.gravity.y = 1;

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Yeni sahne boyutları
    const sceneWidth = 150; // Genişlik 150px yapıldı
    const sceneHeight = 250; // Yükseklik 450px yapıldı
    const wallThickness = 20; // Duvar kalınlığı

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

    // Zemin oluşturma
    const ground = Matter.Bodies.rectangle(
      sceneWidth / 2,
      sceneHeight - wallThickness / 2,
      sceneWidth,
      wallThickness,
      {
        isStatic: true,
        render: {
          fillStyle: "#00000000",
          strokeStyle: "#d3d3d3", // Açık gri kenarlık
          lineWidth: 1,
        },
      }
    );

    // Sol, Sağ ve Üst Duvarlar
    const walls = [
      // Sol Duvar
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#00000000",
            strokeStyle: "#d3d3d3", // Açık gri kenarlık
            lineWidth: 1,
          },
        }
      ),
      // Sağ Duvar
      Matter.Bodies.rectangle(
        sceneWidth + wallThickness / 2,
        sceneHeight / 2,
        wallThickness,
        sceneHeight,
        {
          isStatic: true,
          render: {
            fillStyle: "#00000000",
            strokeStyle: "#d3d3d3", // Açık gri kenarlık
            lineWidth: 1,
          },
        }
      ),
      // Üst Duvar
      Matter.Bodies.rectangle(
        sceneWidth / 2,
        -wallThickness / 2,
        sceneWidth,
        wallThickness,
        {
          isStatic: true,
          render: {
            fillStyle: "#00000000",
            strokeStyle: "#d3d3d3", // Açık gri kenarlık
            lineWidth: 1,
          },
        }
      ),
    ];

    const cubeSize = 40;
    const imagePaths = [
      "/images/atom.png",
      "/images/html-5.png",
      "/images/js.png",
      "/images/css-3.png",
      "/images/bootstrap.png",
      "/images/git-icon.svg",
      "/images/gsap-icon.png",
      "/images/nextjs-icon.png",
      "/images/tailwind.svg",
      "/images/mongodb-icon.svg",
      "/images/firebase.svg",
      "/images/threejs-icon.png",
    ];

    // Küplerin başlangıç pozisyonları, çakışmaları önlemek için aralık genişletildi
    const cubes = imagePaths.map((imagePath, index) => {
      return Matter.Bodies.rectangle(10 + index * 10, 100, cubeSize, cubeSize, {
        restitution: 0.5,
        render: {
          sprite: {
            texture: imagePath, // İlgili resim yolunu atama
            xScale: 1,
            yScale: 1,
          },
          strokeStyle: "#FFFFFF", // Beyaz kenarlık rengi
          lineWidth: 2, // Kenarlık kalınlığı
        },
      });
    });

    cubesRef.current = cubes;

    Matter.World.add(engine.world, [ground, ...walls, ...cubes]);

    /*jumpIntervalRef.current = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * cubesRef.current.length);
      const randomCube = cubesRef.current[randomIndex];
      const forceX = Math.random() * 0.00001;
      const forceY = -0.03 - Math.random() * 0.03;
      Matter.Body.applyForce(randomCube, randomCube.position, {
        x: forceX,
        y: forceY,
      });
    }, 3000);

    const autoJumpInterval = setInterval(() => {
      handleJump();
    }, 3000);
     */
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      //clearInterval(jumpIntervalRef.current); // Interval temizlendi
      //clearInterval(autoJumpInterval);
    };
  }, []);

  // Zıplama fonksiyonu (Buton için)
  const handleJump = () => {
    cubesRef.current.forEach((cube) => {
      const forceX = (Math.random() - 0.1) * 0.0002;
      const forceY = -0.04;
      Matter.Body.applyForce(cube, cube.position, { x: forceX, y: forceY });
    });
  };

  return (
    <div className=" flex-col items-center flex">
      <div className="scene-container" onClick={handleJump}>
        <div ref={scene}></div>
      </div>
    </div>
  );
};

export default JumpingCubes;
