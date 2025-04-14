import { useGLTF } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
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
  const [skyModel, setSkyModel] = useState(null);
  const { scene } = useGLTF(skyScene);

  useEffect(() => {
    if (scene) {
      setSkyModel(scene);
    }
  }, [scene]);

  useFrame(() => {
    if (skyRef.current && rotationSpeed !== 0) {
      skyRef.current.rotation.y += rotationSpeed; // Sync with island
    }
  });

  return (
    <mesh ref={skyRef} receiveShadow={false} castShadow={false}>
      {/* Only render the sky model once it's loaded */}
      {skyModel && <primitive object={skyModel} />}
    </mesh>
  );
};

export default Sky;