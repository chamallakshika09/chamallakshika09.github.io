import React from 'react';
import { Typography, Paper, Stack } from '@mui/material';
import { aboutMe } from 'data';

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
          {aboutMe.intro}
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          {aboutMe.skills}
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          {aboutMe.hobbies}
        </Typography>
      </Stack>
    </Paper>
  );
};
