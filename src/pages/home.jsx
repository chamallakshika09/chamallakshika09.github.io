import React from 'react';
import { Grid, Typography, Button, Avatar, Paper, IconButton, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StackOverflowIcon from 'assets/stack-overflow-icon';
import ProfilePhoto from 'assets/my-photo.png';
import cvFile from 'assets/resume.pdf';
import { FlipCard } from 'components';
import Header from 'components/header';
import { cardData } from 'data/home-page-data';

export const Home = () => {
  return (
    <Stack sx={{ width: '100%', height: '100vh', justifyContent: 'space-between' }}>
      <Header />
      <Paper sx={{ textAlign: 'center', p: 4 }}>
        <Avatar sx={{ width: 90, height: 90, mb: 2, mx: 'auto' }} src={ProfilePhoto} />
        <Typography variant="h4">Chamal Lakshika Perera</Typography>
        <Typography variant="h6">Tech Lead & Fullstack Software Engineer</Typography>
      </Paper>
      <Grid container spacing={2} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.title}>
            <FlipCard title={card.title} description={card.description} />
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
        <Button variant="contained" startIcon={<DownloadIcon />} sx={{ mb: 2 }} href={cvFile} download>
          Download Resume
        </Button>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <IconButton
          aria-label="LinkedIn"
          color="primary"
          href="https://www.linkedin.com/in/chamallakshika09/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="GitHub" color="primary" href="https://github.com/chamallakshika09" target="_blank">
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="StackOverflow"
          color="primary"
          href="https://stackoverflow.com/users/14613753/chamal-perera"
          target="_blank"
        >
          <StackOverflowIcon width={24} />
        </IconButton>
      </Stack>
      <Stack sx={{ bgcolor: 'primary.dark', color: 'white', textAlign: 'center', p: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Chamal Lakshika Perera. All rights reserved.
        </Typography>
      </Stack>
    </Stack>
  );
};
