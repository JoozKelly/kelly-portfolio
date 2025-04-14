import { useEffect, useRef } from 'react';
import bikeScene from '../assets/3d/bike.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bike = ({ rotationSpeed = 0, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(bikeScene);
  const { actions } = useAnimations(animations, ref);

  const lastPlaying = useRef(false);

  useEffect(() => {
    const action = actions['M_rig_Action_S'];
    if (!action) return;

    const speed = rotationSpeed;
    const absSpeed = Math.abs(speed);
    const threshold = 0.00005;

    if (absSpeed > threshold) {
      if (!action.isRunning()) {
        action.play();
        action.paused = false;
      }

      const maxSpeed = 0.01;
      const normalized = Math.min(absSpeed / maxSpeed, 1);

      // 🔁 FLIP direction: negate the sign
      action.timeScale = -Math.sign(speed) * normalized;

      lastPlaying.current = true;
    } else if (lastPlaying.current) {
      action.paused = true;
      lastPlaying.current = false;
    }
  }, [rotationSpeed, actions]);

  return (
    <mesh
      {...props}
      ref={ref}
      position={[0, -0.45, 3.5]}
      scale={0.075}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Bike;
