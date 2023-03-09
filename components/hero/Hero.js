"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "../cube3D/Cube";

const Hero = () => {
  return (
    <div className="bold hero min-h-screen  bg-base-200">
      <div className="bold hero-content flex-col lg:flex-row">
        <Canvas
          camera={{ fov: 25, position: [5, 5, 5] }}
          className="flex-2 md:flex-1"
        >
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
        <div>
          <h1 className="text-4xl font-bold leading-loose subpixel-antialiased hover:text-violet-400">
            WELCOME TO MY PORTFOLIO!
          </h1>
          <p className="py-6 text-xl text-violet-400 tracking-wider font-medium">
            FRONT END FOCUSED DEVELOPER
          </p>
          <div className="mockup-code bg-primary text-primary-content mb-6">
            <pre>
              <code>Moi! I&apos;m an ex-business student,</code>
              <code> who loves building things with code.</code>
            </pre>
          </div>
          <button className="px-10 bold btn bold btn-primary">Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
