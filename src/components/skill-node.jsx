import React from 'react';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';

export const SkillNode = ({ position, skill }) => {
  return (
    <Sphere args={[0.5, 32, 32]} position={position}>
      <MeshDistortMaterial color="royalblue" distort={0.3} speed={2} />
      {/* You could add a Text component from drei here to label the skill */}
    </Sphere>
  );
};
