import {OrbitControls} from '@react-three/drei'

const Experience = () => {
  return (
    <>
    <directionalLight position={[5,5,5]} intensity={0.8} catShadow color={"#9e69da"}/>
    <ambientLight intensity={1}/>
    <OrbitControls/>
    <mesh>
        <meshBasicMaterial/>
        <coneGeometry/>
    </mesh>
    </>
  )
}

export default Experience