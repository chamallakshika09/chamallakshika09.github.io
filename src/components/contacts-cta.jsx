import { Typography, Button, Grid, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StackOverflowIcon from 'assets/stack-overflow-icon';

export const ContactCTA = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        p: 4,
      }}
    >
      <Typography variant="h4" gutterBottom textAlign="center">
        Let's Connect!
      </Typography>
      <Typography variant="body1" paragraph textAlign="center">
        I'm always open to discuss new opportunities, projects, or collaborations.
      </Typography>
      <Button variant="contained" color="primary" href="mailto:chamallakshika09@gmail.com" startIcon={<EmailIcon />}>
        Email Me
      </Button>
      <Grid container spacing={2} justifyContent="center" marginTop={2}>
        <Grid item>
          <IconButton
            color="inherit"
            onClick={() => window.open('https://www.linkedin.com/in/chamallakshika09/')}
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="inherit"
            onClick={() => window.open('https://github.com/chamallakshika09')}
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="inherit"
            onClick={() => window.open('https://stackoverflow.com/users/14613753/chamal-perera')}
            target="_blank"
            aria-label="Stack Overflow"
          >
            <StackOverflowIcon width={32} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="inherit"
            onClick={() => window.open(`https://wa.me/94779365595`)}
            target="_blank"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Stack>
  );
};
