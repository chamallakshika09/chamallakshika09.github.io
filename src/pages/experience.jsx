import { Paper, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import Header from 'components/header';
import { experienceData } from 'data';

export const Experience = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ width: '100%', margin: 'auto', my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Professional Experience
        </Typography>
        <Timeline position="alternate">
          {experienceData.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h1">
                    {exp.title} at {exp.company}
                  </Typography>
                  <Typography>{exp.duration}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {exp.description}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Technologies: {exp.technologies.join(', ')}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
};
