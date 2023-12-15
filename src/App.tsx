import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <>
      <main>
        <div id="canvas-container">
          <Canvas>
            <Box />
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default App;
