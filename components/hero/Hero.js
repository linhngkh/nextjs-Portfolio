"use client";

import { AboutMe } from "@/components/about/AboutMe";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "../cube3D/Cube";

const Hero = () => {
  return (
    <>
      <section className="h-screen flex flex-col content-center justify-between snap-center ">
        <div className=" flex-1 items-center contents ">
          <div className="">
            <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Canvas>
          </div>
          <div className="">
            {" "}
            <h1 className="lg:text-5xl font-bold tracking-[.5em] uppercase leading-loose  hover:drop-shadow-xl md:text-lg sm:text-md   subpixel-antialiased px-5">
              welcome to
              <div className=" py-10 ">
                <h1 className=""> my portfolio space</h1>
              </div>
            </h1>
            <div className="m-8">
              <p className="lg:text-3xl tracking-wider font-medium uppercase hover:drop-shadow-xl md:text-lg sm:text-md subpixel-antialiased ">
                front end web developer
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
    </>
  );
};

export default Hero;
