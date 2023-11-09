import React from 'react';
import { Torus } from '@react-three/drei';

export const CentralObject = ({ position }) => {
  return (
    <Torus args={[1, 0.4, 16, 100]} position={position}>
      <meshStandardMaterial attach="material" color="green" />
    </Torus>
  );
};
