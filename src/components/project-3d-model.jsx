import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

export const Project3DModel = ({ modelPath }) => {
  // This component will render the 3D model using react-three-fiber
  // Replace with your actual 3D model and setup
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        {/* Your model should be imported and used here */}
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};
