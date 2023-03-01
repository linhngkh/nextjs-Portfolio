import { useRef } from "react";
import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Cube = () => {
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#8b5cf6"]} />
          <Text ref={textRef} fontSize={3} color="#fff">
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};
