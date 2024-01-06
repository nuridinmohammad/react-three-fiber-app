import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import "./App.css";
import { Suspense } from "react";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach={"background"} args={["#ececec"]} />
        <Suspense fallback={null}>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
