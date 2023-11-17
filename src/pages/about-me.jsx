import React from 'react';
import { Box, Container, Grid, Typography, Avatar, Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import { HobbiesAndInterests, PersonalQuoteAndGoals } from 'components';
import ProfilePhoto from 'assets/my-photo.png';
import { HeaderLayout } from 'layouts';
import cvFile from 'assets/resume.pdf';

export const AboutMe = () => {
  return (
    <HeaderLayout>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
          <Avatar sx={{ width: 150, height: 150, margin: 'auto' }} src={ProfilePhoto} alt="Chamal Perera" />
          <Typography variant="h3" sx={{ mt: 2 }}>
            Chamal Lakshika Perera
          </Typography>
          <Typography variant="h5" color="textSecondary" sx={{ mt: 1 }}>
            Tech Lead & Fullstack Software Engineer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            sx={{ mt: 4 }}
            href={cvFile}
            download
          >
            Download Resume
          </Button>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <PersonalQuoteAndGoals />
          </Grid>
          <Grid item xs={12} md={6}>
            <HobbiesAndInterests />
          </Grid>
        </Grid>
      </Container>
    </HeaderLayout>
  );
};
