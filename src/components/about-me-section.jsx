import React from 'react';
import { Typography, Paper, Stack } from '@mui/material';

export const AboutMeSection = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4, maxWidth: '1000px' }}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          p: {
            xs: 2,
            md: 4,
          },
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          Hi, I'm Chamal Perera, a passionate Tech Lead and Fullstack Software Engineer. I have a deep love for web
          development and enjoy building robust and scalable web applications using cutting-edge technologies.
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          My journey in software development started in 2013, and since then, I've been honing my skills in JavaScript,
          React, HTML, CSS, and various web development technologies. I love solving complex problems and creating
          elegant solutions for real-world challenges.
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          In my free time, I enjoy spending time with my family and friends, and I'm always eager to learn and explore
          new technologies. I believe in continuous improvement and strive to stay up-to-date with the latest industry
          trends and best practices.
        </Typography>
      </Stack>
    </Paper>
  );
};
