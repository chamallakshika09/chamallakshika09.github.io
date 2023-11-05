import React from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StackOverflowIcon from 'assets/stack-overflow-icon';

export const ContactCTA = () => {
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        backgroundImage: 'url("/path-to-background-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Let's Connect!
      </Typography>
      <Typography variant="body1" paragraph>
        I'm always open to discussing new opportunities, projects, or collaborations.
      </Typography>
      <Button variant="contained" color="primary" href="mailto:chamallakshika09@gmail.com" startIcon={<EmailIcon />}>
        Email Me
      </Button>
      <Grid container spacing={2} justifyContent="center" marginTop={2}>
        <Grid item>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/chamallakshika09/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="inherit" href="https://github.com/chamallakshika09" target="_blank" aria-label="GitHub">
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="inherit"
            href="https://stackoverflow.com/users/14613753/chamal-perera"
            target="_blank"
            aria-label="Stack Overflow"
          >
            <StackOverflowIcon width={32} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};