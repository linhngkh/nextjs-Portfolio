"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./Cube";

const Cube3D = () => {
  return (
    <div className="h-screen w-full snap-center ">
      <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Cube3D;
