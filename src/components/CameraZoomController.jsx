import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const CameraZoomController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      const zoomSpeed = 2; // Smaller number = slower zoom
      const minFov = 75;
      const maxFov = 85;

      camera.fov += e.deltaY * 0.02 * zoomSpeed;
      camera.fov = Math.max(minFov, Math.min(maxFov, camera.fov));
      camera.updateProjectionMatrix();
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (handleTouchMove.lastDistance) {
          const delta = distance - handleTouchMove.lastDistance;
          const zoomSpeed = 0.1;
          camera.fov -= delta * zoomSpeed;
          camera.fov = Math.max(25, Math.min(75, camera.fov));
          camera.updateProjectionMatrix();
        }

        handleTouchMove.lastDistance = distance;
      }
    };

    const handleTouchEnd = () => {
      handleTouchMove.lastDistance = null;
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return null;
};

export default CameraZoomController;
