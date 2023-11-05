import React from 'react';
import { Typography, Paper, Stack, Tab, Tabs, Box } from '@mui/material';
import { experienceData } from 'data';

export const ExperienceSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4, maxWidth: '1000px' }}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          p: {
            xs: 2,
            md: 4,
          },
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" centered>
          {experienceData.map((experience, index) => (
            <Tab key={index} label={experience.company} />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {experienceData[0].role}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
            {experienceData[0].dateRange}
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.15rem' }}>
            {experienceData[0].description}
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {experienceData[1].role}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
            {experienceData[1].dateRange}
          </Typography>
          <Typography paragraph sx={{ fontSize: '1.15rem' }}>
            {experienceData[1].description}
          </Typography>
        </TabPanel>
      </Stack>
    </Paper>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
