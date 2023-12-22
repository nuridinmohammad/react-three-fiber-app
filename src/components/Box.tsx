import { Environment, OrbitControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type BoxProps = MeshProps & {
  position: [number, number, number];
  // name: string;
};

const Box = (props: BoxProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  );
  // useEffect(() => {
  //   if (meshRef.current.name === 'B') {
  //     meshRef.current.position.y = 1
  //   }
  // })

  // useLayoutEffect(() => {
  //   if (meshRef.current.name === 'B') {
  //     meshRef.current.position.x = 1
  //   }
  // })

  // useFrame((_, delta) => {
  //   console.log(delta);

  //   meshRef.current.rotation.x += 1 * delta
  //   meshRef.current.rotation.y += 0.5 * delta
  // })
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.x += 1 * delta;
  //   meshRef.current.rotation.y += 0.5 * delta;
  // });
  useEffect(() => {
    console.log(meshRef.current.geometry.uuid);
    console.log(count);
    
  },[count]);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += 1 * delta;
    meshRef.current.rotation.y += 0.5 * delta;
  });

  return (
    <>
      <Environment preset="sunset" background />
      <ambientLight intensity={1} />
      {/* <directionalLight position={[6, 1, 5]} /> */}
      <OrbitControls />
      <mesh
        {...props}
        ref={meshRef}
        onPointerDown={() => setCount((count + 1) % 2)}
        geometry={geometry[count]}
      >
        <meshBasicMaterial color={"lime"} wireframe />
      </mesh>
    </>
  );
};

export default Box;
