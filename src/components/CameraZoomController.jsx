import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const CameraZoomController = () => {
  const { camera } = useThree();

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      const zoomSpeed = 0.5; // Slower zoom
      const minFov = 70; // Minimum FOV for mobile (so the island fits on screen)
      const maxFov = 85; // Maximum zoom-in limit

      // Adjust zoom based on wheel movement
      camera.fov += e.deltaY * 0.02 * zoomSpeed;
      camera.fov = Math.max(minFov, Math.min(maxFov, camera.fov));
      camera.updateProjectionMatrix();
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();

        // Calculate distance between the two touch points
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Adjust zoom only if the distance between fingers changes
        if (handleTouchMove.lastDistance) {
          const delta = handleTouchMove.lastDistance - distance; // Use the change in distance for zoom direction
          const zoomSpeed = 0.05; // Less zoom speed for smoother behavior

          // Apply zoom with the calculated delta
          camera.fov += delta * zoomSpeed;
          camera.fov = Math.max(55, Math.min(75, camera.fov)); // Clamp FOV for mobile to prevent zooming out too much
          camera.updateProjectionMatrix();
        }

        // Store the last distance for the next move
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
