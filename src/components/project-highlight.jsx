import React from 'react';
import { Box } from '@react-three/drei';

export const ProjectHighlight = ({ position, project }) => {
  return (
    <Box args={[1, 1, 1]} position={position}>
      <meshStandardMaterial attach="material" color="orange" />
      {/* Add a label or interactive element here */}
    </Box>
  );
};
