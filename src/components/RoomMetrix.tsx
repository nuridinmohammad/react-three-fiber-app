

const RoomMetrix = () => {


  return (
    <>
      
      <mesh>
        <boxGeometry args={[100, 10, 100, 100, 10, 100]} />
        <meshBasicMaterial wireframe color={"lime"} />
      </mesh>
      {/* <div id="instructions" className={showInstructions ? "show" : "hide"}>
        Instructions
        <button id="button">Click To Enter</button>
      </div> */}
    </>
  );
};

export default RoomMetrix;
