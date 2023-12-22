import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function Polyhedron({
  position,
  polyhedron,
}: {
  position: [number, number, number];
  polyhedron: (
    | THREE.BoxGeometry
    | THREE.SphereGeometry
    | THREE.DodecahedronGeometry
    | THREE.TorusGeometry
  )[];
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <OrbitControls enableDamping={false} /> */}
      {/* <OrbitControls enablePan={false} enableRotate={true} /> */}
      <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />
      <mesh
        position={position}
        ref={ref}
        onPointerDown={() => {
          setCount((count + 1) % 4);
        }}
        geometry={polyhedron[count]}
      >
        <meshBasicMaterial color={"lime"} wireframe />
      </mesh>
    </>
  );
}
