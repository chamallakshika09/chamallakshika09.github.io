import { Typography } from '@mui/material';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
export const ExperienceTimelIne = () => {
  return (
    <Timeline position="alternate">
      {/* Current Role */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">March 2023 - Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Tech Lead
          </Typography>
          <Typography>DigitalBlue Foam</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Previous Roles */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">April 2021 - February 2023</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Fullstack Software Engineer
          </Typography>
          <Typography>DigitalBlue Foam</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">February 2018 - April 2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Tech Lead
          </Typography>
          <Typography>L K Simulations (Private) Limited</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">January 2017 – February 2018</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Associate Tech Lead
          </Typography>
          <Typography>L K Simulations (Private) Limited</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">August 2015 – January 2017</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Senior Software Engineer / Specialized Software Engineer
          </Typography>
          <Typography>L K Simulations (Private) Limited</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">August 2013 – December 2017</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Trainee Developer / Research Assistant / Research Consultant
          </Typography>
          <Typography>University of Colombo School of Computing</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
