import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Sphere() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.002;
  });

  const textureLoader = new TextureLoader();
  const normalmap = textureLoader.load("../texture.jpg");

  return (
    <>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[2.5, 64, 64]} attach="geometry" />
        <meshStandardMaterial
          normalMap={normalmap}
          attach="material"
          color="#333"
          metalness={0.8}
          roughness={0.1}
        />
      </mesh>
      <ambientLight intensity={2} />
      <pointLight
        castShadow
        intensity="50"
        color="#3399ff"
        position={[-1.86, 1.5, 2.5]}
      />
      <pointLight
        castShadow
        intensity="50"
        color="#D53F8C"
        position={[2.13, -2.5, 2.5]}
      />
      <pointLight castShadow intensity="1" color="#fff" position={[2, 3, 2]} />
      <pointLight
        castShadow
        intensity="20"
        color="#2B6CB0"
        position={[0, 0, -3]}
      />
    </>
  );
}
