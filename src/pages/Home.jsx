import React, { useState, Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import ProgressBar from "../components/ProgressBar";


import Island from '../models/Island3';
/* import { Sky } from '@react-three/drei'; */
import Bike from '../models/Bike';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
/* import Windmill from '../models/Windmill'; */
/* import Biker from '../models/Biker'; */

import sakura from '../assets/sakura.mp3'
import { soundon, soundoff } from '../assets/icons';
import CameraZoomController from '../components/CameraZoomController';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(0.01);// Track rotation speed
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);


  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  // Adjust rotation speed based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 430) {
        setRotationSpeed(0); // Freeze sky rotation on mobile devices
      } else {
        setRotationSpeed(0.01); // Normal speed for larger screens
      }
    };

    // Set initial speed on load
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Clean up listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -0.9, -1.9];
    let rotation = [0.1, 3.4, 0];

    if (window.innerWidth < 430) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustBikeForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 430) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -2, -4];
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [bikeScale, bikePosition] = adjustBikeForScreenSize();

  
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        shadows
        className={`w-full h-screen bg-transparent ${isRotating ?
          'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000, fov: 75 }}

      >
        <Suspense fallback={<Loader />}>
          <CameraZoomController />
          <directionalLight position={[5, 10, 5]} intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024} />
          <ambientLight intensity={1} />
          <hemisphereLight skyColor="#0000FF" groundColor="#000000"
            intensity={0.5} />

          <Sky rotationSpeed={rotationSpeed}
          /* distance={450000} */
          /* sunPosition={[0, 0.1, -1]} */  // Sun near the horizon
          /* turbidity={0.9} */           // Minimal haze
          /* rayleigh={0.5} */            // Lower scattering for deeper colors
          /* mieCoefficient={0.001} */    // Minimal haze
          /* mieDirectionalG={0.7} */     // More haze in the forward direction
          />

          <Island
            castShadow
            receiveShadow
            setRotationSpeed={setRotationSpeed} // Sync island rotation
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            currentAnimation="Take 001"
          />
          <Bike
            castShadow
            receiveShadow
            isRotating={isRotating}
            rotationSpeed={rotationSpeed} // ✅ Pass the speed here
            scale={bikeScale}
            position={bikePosition}
            rotation={[0, 20.5, 0]}
          />

        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>

      <ProgressBar currentStage={currentStage} />

    </section>
  )
}

export default Home