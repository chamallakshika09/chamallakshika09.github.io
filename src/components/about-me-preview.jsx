import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { aboutMe } from 'data';

export const AboutMePreview = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        {aboutMe.intro}
      </Typography>
      <Button variant="contained" href="#/about-me">
        Learn More
      </Button>
    </Box>
  );
};
