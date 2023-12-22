import {
  BakeShadows,
  Detailed,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { useRef } from "react";

function Model(props: any) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/Poimandres.gltf");
  return (
    <group ref={groupRef} {...props} dispose={null} position={[0, -2.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

const Arrow = () => {
  console.log("rendering...");

  return (
    <>
      <Detailed distances={[0, 10, 20]}>
        <Model />
        <OrbitControls />
        <Environment preset="dawn" background />
        <BakeShadows />
      </Detailed>
    </>
  );
};

export default Arrow;
useGLTF.preload("/Poimandres.gltf");
