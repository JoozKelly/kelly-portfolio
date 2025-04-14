import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

/*const Sky = ({ isRotating }) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  
  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y -= 0.02 * delta;
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky */

const Sky = ({ rotationSpeed }) => {
  const skyRef = useRef();

  useFrame(() => {
    if (skyRef.current) {
      skyRef.current.rotation.y += rotationSpeed; // Sync with island
    }
  });

  return (
    <mesh ref={skyRef} receiveShadow={false} castShadow={false}>
      <primitive object={useGLTF(skyScene).scene} />
    </mesh>
  );
};

export default Sky;