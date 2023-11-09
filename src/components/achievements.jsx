import React from 'react';
import { Icosahedron } from '@react-three/drei';

export const Achievements = ({ position }) => {
  return (
    <Icosahedron args={[0.7, 0]} position={position}>
      <meshStandardMaterial attach="material" color="gold" />
      {/* Label or interaction */}
    </Icosahedron>
  );
};
