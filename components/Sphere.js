import { useRef,useState } from "react";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Sphere() {
  const mesh = useRef();
  const [vec] = useState(() => new THREE.Vector3())
  useFrame((state) => {
    mesh.current.rotation.y += 0.005;
    state.camera.position.lerp(vec.set(state.mouse.x * 5, state.mouse.y * 5, 5),0.05);
    state.camera.lookAt(0, 0, 0);
  });

  const textureLoader = new TextureLoader();
  const normalmap = textureLoader.load("../texture.jpg");

  return (
    <>
      <mesh ref={mesh}>
        <sphereBufferGeometry args={[3, 64, 64]} attach="geometry" />
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
    </>
  );
}
