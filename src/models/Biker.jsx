import { useEffect, useRef, useState } from "react";
import bikerScene from "../assets/3d/biker.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Biker = ({ islandRotation = 0, radius = 3.2, speed = 0.005, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(bikerScene);
  const { actions } = useAnimations(animations, ref);

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    if (actions["M_rig_Action_S"]) {
      actions["M_rig_Action_S"].play().setLoop(THREE.LoopRepeat, Infinity);
    }
  }, [actions]);

  useFrame(() => {
    if (ref.current) {
      setAngle((prevAngle) => prevAngle + speed);

      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);

      const adjustedX = x * Math.cos(islandRotation) - z * Math.sin(islandRotation);
      const adjustedZ = x * Math.sin(islandRotation) + z * Math.cos(islandRotation);

      ref.current.position.set(adjustedX, -0.5, adjustedZ);
      ref.current.rotation.y = Math.atan2(adjustedX, adjustedZ) - Math.PI / 2;
    }
  });

  return (
    <mesh {...props} ref={ref} scale={0.19}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Biker;
