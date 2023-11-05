import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export const FloatingShape = ({ position, args, color }) => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={mesh} scale={hovered ? 1.5 : 1} onClick={(event) => setHover(!hovered)}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>
  );
};
