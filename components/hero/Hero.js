"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "../cube3D/Cube";

const Hero = () => {
  return (
    <div className="h-screen flex content-center justify-between snap-center mt-10">
      <section className="h-screen snap-center w-1400 flex justify-between">
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }} className="flex-2">
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <Cube />
        </Canvas>
        <div className="flex-2 flex justify-center items-center flex-col text-start bg-green ">
          <div className="mb-7 ">
            <h1 className=" text-5xl font-bold tracking-[.5em] uppercase leading-loose subpixel-antialiased hover:text-violet-400  ">
              welcome to <span className="">my space</span>
            </h1>
          </div>{" "}
          <div className="">
            <div className="mb-7">
              {" "}
              <p className="text-3xl text-violet-400 tracking-wider font-medium uppercase hover:drop-shadow-xl  subpixel-antialiased  ">
                front end web developer
              </p>
            </div>

            <div className="mockup-code bg-primary text-primary-content">
              <pre>
                <code>Moi! I&apos;m an ex-business student,</code>
                <code> who loves building things with code.</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
