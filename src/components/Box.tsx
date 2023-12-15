
const Box = () => {
  return (
    <>
    <directionalLight position={[0, 0, 10]}/>
      <mesh position={[5, 0 ,0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[-5, 0 ,0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <mesh position={[10, 0 ,0]}>
        <boxGeometry />
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </>
  );
};

export default Box; 
