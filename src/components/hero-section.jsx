import React from 'react';
import { Box, Typography, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import ProfilePhoto from 'assets/my-photo.png';
import StackOverflowIcon from 'assets/stack-overflow-icon';
import { Dynamic3DBackground } from './dynamic-3d-background';

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Dynamic3DBackground />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 10,
          p: isMobile ? 2 : 4,
          backdropFilter: 'blur(5px)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={ProfilePhoto}
          alt="Chamal Perera"
          sx={{ width: 120, height: 120, borderRadius: '50%', mb: 2 }}
        />
        <Typography variant={isMobile ? 'h4' : 'h2'} gutterBottom>
          Chamal Perera
        </Typography>
        <Typography variant={isMobile ? 'h6' : 'h5'}>Tech Lead & Fullstack Software Engineer</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          I create robust and scalable web applications with cutting-edge technologies.
        </Typography>
        <Button variant="contained" startIcon={<DownloadIcon />} sx={{ mb: 2 }} href="" download>
          Download Resume
        </Button>
        <Box>
          <IconButton
            aria-label="LinkedIn"
            color="primary"
            href="https://www.linkedin.com/in/chamallakshika09/"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="GitHub" color="primary" href="https://github.com/chamallakshika09" target="_blank">
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="StackOverflow"
            color="primary"
            href="https://stackoverflow.com/users/14613753/chamal-perera"
            target="_blank"
          >
            <StackOverflowIcon width={24} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
