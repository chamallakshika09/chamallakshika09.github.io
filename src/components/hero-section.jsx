import { Box, Typography, Button, useTheme, useMediaQuery, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ProfilePhoto from 'assets/my-photo.png';
import cvFile from 'assets/resume.pdf';

export const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack alignItems="center" spacing={1} justifyContent="center" sx={{ p: isMobile ? 2 : 4 }}>
      <Box
        component="img"
        src={ProfilePhoto}
        alt="Chamal Perera"
        sx={{ width: 140, height: 172, borderRadius: '50%' }}
      />
      <Typography variant={isMobile ? 'h5' : 'h3'} gutterBottom textAlign="center">
        Chamal Perera
      </Typography>
      <Typography variant={isMobile ? 'h6' : 'h5'} textAlign="center">
        Tech Lead & Fullstack Software Engineer
      </Typography>
      <Typography variant="body1" textAlign="center">
        I create robust and scalable web applications with cutting-edge technologies.
      </Typography>
      <Button variant="contained" startIcon={<DownloadIcon />} href={cvFile} download>
        Download Resume
      </Button>
    </Stack>
  );
};
