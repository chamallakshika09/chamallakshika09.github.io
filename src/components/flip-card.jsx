import React, { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export const FlipCard = ({ title, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCardContainerStyle = {
    width: 300,
    height: 200,
    perspective: '1000px',
    margin: 'auto',
    cursor: 'pointer',
  };

  const flipCardStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const cardFrontBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Box sx={flipCardContainerStyle} onClick={() => setIsFlipped(!isFlipped)}>
      <Box sx={flipCardStyle}>
        <Card sx={{ ...cardFrontBackStyle, backgroundColor: 'lightblue' }}>
          <CardContent>
            <Typography variant="h5" align="center">
              {title}
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ ...cardFrontBackStyle, backgroundColor: 'lightcoral', transform: 'rotateY(180deg)' }}>
          <CardContent>
            <Typography variant="body1" align="center">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default FlipCard;
