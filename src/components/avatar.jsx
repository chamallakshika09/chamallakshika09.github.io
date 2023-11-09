import React from 'react';
import { Sphere, useTexture } from '@react-three/drei';
import ProfilePhoto from 'assets/my-photo.png';

export const Avatar = ({ position }) => {
  const texture = useTexture(ProfilePhoto); // Replace with your avatar texture
  return (
    <Sphere args={[0.8, 32, 32]} position={position}>
      <meshStandardMaterial attach="material" map={texture} />
    </Sphere>
  );
};
