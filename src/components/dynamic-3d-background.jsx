import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingShape } from './floating-shape';
import { OrbitControls, Stars } from '@react-three/drei';

export const Dynamic3DBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbitControls />
      <FloatingShape position={[-1.2, 0, 0]} args={[1, 1, 1]} color="royalblue" />
      <FloatingShape position={[1.2, 0, 0]} args={[1, 1, 1]} color="orange" />
    </Canvas>
  );
};
