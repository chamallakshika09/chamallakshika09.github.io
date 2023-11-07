import { Box, Typography, Divider } from '@mui/material';

export const PersonalQuoteAndGoals = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        "I create robust and scalable web applications with cutting-edge technologies."
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="body1">
        As a Tech Lead, my goal is to drive projects to success while ensuring the highest code quality and pushing the
        boundaries of technology. I'm passionate about mentoring junior developers, building innovative web solutions,
        and continuous learning.
      </Typography>
    </Box>
  );
};
