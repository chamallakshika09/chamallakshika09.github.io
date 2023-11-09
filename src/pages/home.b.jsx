import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Achievements, Avatar, CentralObject, ProjectHighlight, SkillNode } from 'components';
import { Box } from '@mui/material';

export const HomeB = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Stars />
          <CentralObject position={[0, 0, 0]} />
          <SkillNode position={[2, 0, 0]} skill="React" />
          <SkillNode position={[-2, 0, 0]} skill="Node.js" />

          <ProjectHighlight position={[0, 2, 0]} project="Project 1" />

          <Achievements position={[0, -2, 0]} />

          <Avatar position={[0, 0, -2]} />
          <OrbitControls />
        </Suspense>
      </Canvas>

      <div id="info-overlay">{/* This div can contain any overlays or additional information */}</div>
    </Box>
  );
};
