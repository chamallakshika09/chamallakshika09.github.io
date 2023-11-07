import React, { useState } from 'react';
import { Box, Button, TextField, Grid, Snackbar, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StackOverflowIcon from 'assets/stack-overflow-icon';
import CloseIcon from '@mui/icons-material/Close';
import Header from 'components/header';

export const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Replace with your actual handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box>
      <Header />
      <Box sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                // useForm hook can be used for validation and managing state
              />
              <TextField fullWidth label="Email" margin="normal" variant="outlined" type="email" />
              <TextField fullWidth label="Message" margin="normal" variant="outlined" multiline rows={4} />
              <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />} sx={{ mt: 3 }}>
                Send
              </Button>
            </form>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message="Message sent successfully!"
              action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
              <Button
                href="https://www.linkedin.com/in/chamallakshika09/"
                target="_blank"
                startIcon={<LinkedInIcon />}
                sx={{ my: 1 }}
              >
                LinkedIn
              </Button>
              <Button
                href="https://github.com/chamallakshika09"
                target="_blank"
                startIcon={<GitHubIcon />}
                sx={{ my: 1 }}
              >
                GitHub
              </Button>
              <Button
                href="https://stackoverflow.com/users/14613753/chamal-perera"
                target="_blank"
                startIcon={<StackOverflowIcon width={24} />} // Custom icon required
                sx={{ my: 1 }}
              >
                Stack Overflow
              </Button>
              {/* Add more social links if needed */}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
