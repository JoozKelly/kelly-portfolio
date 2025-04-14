import { useRef, useEffect } from 'react';
import windmillScene from "../assets/3d/windmill.glb";
import { useAnimations, useGLTF } from '@react-three/drei';

const Windmill = () => {
  const windmillRef = useRef();
  const { scene, animations } = useGLTF(windmillScene);
  const { actions } = useAnimations(animations, windmillRef);

  useEffect(() => {
    actions['Windmill_animation'].play();
  }, [actions]);

  return (
    <mesh 
      position={[-0.585, -1.228, 2.442]} 
      scale={[1.5, 1.5, 1.5]} 
      ref={windmillRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Windmill;
