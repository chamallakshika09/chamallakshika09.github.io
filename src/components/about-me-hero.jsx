import { Box, Typography, Avatar, Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import ProfilePhoto from 'assets/my-photo.png';
import cvFile from 'assets/resume.pdf';

export const AboutMeHero = () => {
  return (
    <Box py={6} textAlign="center">
      <Avatar sx={{ width: 140, height: 172, margin: 'auto' }} src={ProfilePhoto} alt="Chamal Perera" />
      <Typography variant="h3" sx={{ mt: 2 }}>
        Chamal Lakshika Perera
      </Typography>
      <Typography variant="h5" color="textSecondary" sx={{ mt: 1 }}>
        Tech Lead & Fullstack Software Engineer
      </Typography>
      <Button variant="contained" color="primary" startIcon={<DownloadIcon />} sx={{ mt: 4 }} href={cvFile} download>
        Download Resume
      </Button>
    </Box>
  );
};
