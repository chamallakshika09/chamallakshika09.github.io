import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

export const EducationTimeline = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Educational Background
      </Typography>
      <Timeline position="alternate">
        {/* Master's Degree */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">January 2015 - June 2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Master of Computer Science
            </Typography>
            <Typography>University of Colombo School of Computing</Typography>
          </TimelineContent>
        </TimelineItem>
        {/* Bachelor's Degree */}
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">August 2010 - April 2014</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="span">
              Bachelor of Computer Science
            </Typography>
            <Typography>University of Colombo School of Computing</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};
