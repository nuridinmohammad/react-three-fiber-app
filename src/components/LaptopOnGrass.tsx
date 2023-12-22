import { OrbitControls, useGLTF } from "@react-three/drei";

const MODEL_PATH = "/laptop on grass";

function LaptopOnGrass() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Model />
    </>
  );
}

function Model() {
  const { scene } = useGLTF(MODEL_PATH);
  return <primitive object={scene} />;
}

export default LaptopOnGrass;
