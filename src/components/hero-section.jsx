import { Button, Typography, Stack, Avatar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackOverflowIcon from 'assets/stack-overflow-icon';

export const HeroSection = () => {
  return (
    <Stack
      sx={{
        height: '100%',
        p: {
          xs: 2,
          md: 4,
        },
        textAlign: 'left',
      }}
      justifyContent="flex-start"
      alignItems={{ xs: 'center', md: 'flex-start' }}
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems={{ xs: 'flex-start', md: 'flex-start' }} // Added center alignment for xs screens
      >
        <Typography variant="subtitle1" paragraph>
          Hi there 👋
        </Typography>
        <Typography variant="subtitle1" paragraph>
          My name is
        </Typography>
        <Typography variant="h2" gutterBottom sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
          Chamal Perera
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
          Tech Lead & Fullstack Software Engineer
        </Typography>
        <Typography variant="subtitle1" paragraph>
          I create robust and scalable web applications with cutting-edge technologies.
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: { xs: 2, md: 0 } }}>
          <Button variant="contained" color="secondary" href="#projects" size="large">
            Resume
          </Button>
          <IconButton href="https://github.com/chamallakshika09" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://stackoverflow.com/users/14613753/chamal-perera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StackOverflowIcon width={32} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/chamallakshika09/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Avatar
        src="my-photo.png"
        alt="Chamal Perera"
        sx={{
          width: { xs: 150, md: 200 },
          height: 'auto',
        }}
        variant="rounded"
      />
    </Stack>
  );
};
