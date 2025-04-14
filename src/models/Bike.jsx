import { useEffect, useRef } from 'react'
import bikeScene from '../assets/3d/bike.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bike = ({ isRotating, ...props}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(bikeScene);
  const { actions } = useAnimations(animations, ref);  

useEffect(() => { 
    if(isRotating) {
      actions['M_rig_Action_S'].play();
    } else {
      actions['M_rig_Action_S'].stop();
    }
}, [actions, isRotating])

  return (
    <mesh {...props} ref={ref} position={[0, -0.45, 3.5]} scale={0.075}> {/* Adjusted scale for visibility */}
      <primitive object={scene} />
    </mesh>
  );
};

export default Bike;
