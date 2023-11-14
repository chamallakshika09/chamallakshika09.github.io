import React from 'react';
import { Box, Typography, Grid, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StackOverflowIcon from 'assets/stack-overflow-icon';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', padding: 3 }}>
      {/* <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Chamal Perera</Typography>
          <Typography variant="body2">Tech Lead & Fullstack Software Engineer</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Quick Links</Typography>
          <Link href="#/about-me" color="inherit">
            About Me
          </Link>
          <br />
          <Link href="#/projects" color="inherit">
            Projects
          </Link>
          <br />
          <Link href="#/contact" color="inherit">
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} md={4} textAlign="right">
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/chamallakshika09/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="https://github.com/chamallakshika09" target="_blank" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://stackoverflow.com/users/14613753/chamal-perera"
            target="_blank"
            aria-label="Stack Overflow"
          >
            <StackOverflowIcon width={24} />
          </IconButton>
        </Grid>
      </Grid> */}
      <Typography variant="body2" textAlign="center" marginTop={2}>
        © {new Date().getFullYear()} Chamal Perera. All rights reserved.
      </Typography>
    </Box>
  );
};
