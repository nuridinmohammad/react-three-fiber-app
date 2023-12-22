import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense, useEffect, useState } from "react";
import {
  PerformanceMonitor,
  PointerLockControls,
  Stats,
} from "@react-three/drei";
// import * as THREE from "three";
import RoomMetrix from "./components/RoomMetrix";
function App() {
  const [dpr, setDpr] = useState(1.5);
  const [showInstructions, setShowInstructions] = useState(true);

  function pointerlockchange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerlockchange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerlockchange,
        false
      );
    };
  });
  // const polyhedron = useMemo(
  //   () => [
  //     new THREE.BoxGeometry(),
  //     new THREE.SphereGeometry(0.785398),
  //     new THREE.DodecahedronGeometry(0.785398),
  //     new THREE.TorusGeometry(0.785398),
  //   ],
  //   []
  // );

  return (
    <div className="App">
      <Canvas
        frameloop="demand"
        shadows
        dpr={dpr}
        performance={{ min: 0.1 }}
        gl={{ antialias: false }}
        // camera={{ position: [0, 2, 5], fov: 30 }}
        camera={{ position: [0, 0, 0] }}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        >
          <Suspense fallback={null}>
            {/* <LaptopOnGrass /> */}
            {/* <Box position={[-0.75, 0, 0]} name="A"/> */}
            {/* <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
            <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} /> */}
            <RoomMetrix />
            <Stats showPanel={2} />
            <PointerLockControls selector="#button" />
            {/* <Perf position="top-right" /> */}
          </Suspense>
        </PerformanceMonitor>
      </Canvas>
      <div id="instructions" className={showInstructions ? "show" : "hide"}>
        Instructions
        <button id="button">Click To Enter</button>
      </div>
      
    </div>
  );
}

export default App;
