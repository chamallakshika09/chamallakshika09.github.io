import { Paper, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import WorkIcon from '@mui/icons-material/Work';
import Header from 'components/header';

const experiences = [
  {
    title: 'Tech Lead',
    company: 'DigitalBlue Foam',
    duration: 'March 2023 - Present',
    description: 'Guiding the technical direction and ensuring the robustness of web applications.',
    technologies: ['React', 'Node.js', 'AWS'],
  },
  {
    title: 'Fullstack Software Engineer',
    company: 'DigitalBlue Foam',
    duration: 'April 2021 - February 2023',
    description:
      'Developed full-stack applications and contributed to all stages of the software development lifecycle.',
    technologies: ['React', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Tech Lead',
    company: 'LK Simulations (Private) Limited',
    duration: 'February 2018 - April 2021',
    description:
      'Led the development team in creating simulation software and fostered an agile development environment.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Associate Tech Lead',
    company: 'LK Simulations (Private) Limited',
    duration: 'January 2017 – February 2018',
    description:
      'Managed a team of developers and worked closely with stakeholders to define project scopes and deliverables.',
    technologies: ['C#', 'Xamarin', 'Swift'],
  },
  {
    title: 'Senior Software Engineer / Specialized Software Engineer',
    company: 'LK Simulations (Private) Limited',
    duration: 'August 2015 – January 2017',
    description: 'Focused on high-level system design and integration with an emphasis on scalability and performance.',
    technologies: ['C++', 'Python', 'Java SE'],
  },
  {
    title: 'Trainee Developer / Research Assistant / Research Consultant',
    company: 'University of Colombo School of Computing',
    duration: 'August 2013 – December 2017',
    description:
      'Engaged in research and development while supporting academic projects and facilitating technology transfer.',
    technologies: ['Java', 'Android', 'WebSocket'],
  },
];

export const Experience = () => {
  return (
    <Box>
      <Header />
      <Box sx={{ width: '100%', margin: 'auto', my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Professional Experience
        </Typography>
        <Timeline position="alternate">
          {experiences.map((exp, index) => (
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
