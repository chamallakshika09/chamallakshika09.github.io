import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

const skillsWithRating = {
  currentSkills: {
    'React.js': 5,
    Redux: 5,
    'Express.js': 5,
    'Node.js': 5,
    Javascript: 5,
    HTML: 5,
    CSS: 5,
    'Three.js': 5,
    Mongodb: 5,
    MySQL: 5,
    'Electron.js': 5,
    'Java SE': 5,
    AWS: 5,
    Git: 5,
    Jest: 5,
    'React testing library': 5,
  },
  pastExperience: {
    Webpack: 2,
    Docker: 2,
    Firebase: 2,
    Heroku: 2,
    WebSocket: 2,
    Redis: 2,
    'Android with Java': 2,
    'React Native': 2,
    Swift: 2,
    Xamarin: 2,
    'C#': 2,
    'C++': 2,
    Python: 2,
  },
  // Add more categories if needed
};

export const SkillsSection = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Skills
      </Typography>
      {Object.entries(skillsWithRating).map(([category, skills]) => (
        <Box key={category} sx={{ mb: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom>
            {category === 'currentSkills' ? 'Current Skills' : 'Past Experience'}:
          </Typography>
          <Stack direction="column" spacing={1}>
            {Object.entries(skills).map(([skill, rating]) => (
              <Box key={skill} sx={{ display: 'flex', alignItems: 'center' }}>
                <Chip label={skill} variant="outlined" sx={{ mr: 1, width: '150px' }} />
                <Rating name={`skill-rating-${skill}`} value={rating} readOnly />
              </Box>
            ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};
