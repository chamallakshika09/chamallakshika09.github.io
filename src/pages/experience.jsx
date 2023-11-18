import { Typography, Box } from '@mui/material';
import { HeaderLayout } from 'layouts';
import { ExperienceTimeline } from 'components';

export const Experience = () => {
  return (
    <HeaderLayout>
      <Box sx={{ width: '100%', margin: 'auto', my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Professional Experience
        </Typography>
        <ExperienceTimeline />
      </Box>
    </HeaderLayout>
  );
};
