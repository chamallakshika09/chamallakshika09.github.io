import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { aboutMe } from 'data';
import { useNavigate } from 'react-router-dom';

export const AboutMePreview = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph textAlign="justify">
        {aboutMe.intro}
        {aboutMe.skills}
        {aboutMe.hobbies}
      </Typography>
      <Button variant="contained" onClick={() => navigate('/about-me')}>
        Learn More
      </Button>
    </Stack>
  );
};
