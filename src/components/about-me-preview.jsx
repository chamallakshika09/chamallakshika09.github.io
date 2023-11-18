import { Typography, Button, Stack, Container } from '@mui/material';
import { aboutMe } from 'data';
import { useNavigate } from 'react-router-dom';

export const AboutMePreview = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Stack justifyContent="center" alignItems="center" spacing={1} sx={{ py: 4, px: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          {aboutMe.intro}
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          {aboutMe.skills}
        </Typography>
        <Typography variant="body1" paragraph textAlign="justify">
          {aboutMe.hobbies}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/about-me')}>
          Learn More
        </Button>
      </Stack>
    </Container>
  );
};
