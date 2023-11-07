import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { aboutMe } from 'data';
import { useNavigate } from 'react-router-dom';

export const AboutMePreview = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        {aboutMe.intro}
      </Typography>
      <Typography variant="body1" paragraph>
        {aboutMe.skills}
      </Typography>
      <Typography variant="body1" paragraph>
        {aboutMe.hobbies}
      </Typography>
      <Button variant="contained" onClick={() => navigate('/about-me')}>
        Learn More
      </Button>
    </Box>
  );
};
