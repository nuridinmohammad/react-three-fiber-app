import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Suspense } from "react";
import {Sky} from '@react-three/drei'

function App() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Sky/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
