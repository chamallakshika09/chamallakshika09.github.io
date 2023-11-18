import { Box, Stack, Typography } from '@mui/material';
import logoImage from 'assets/logo.png';

export const Footer = () => {
  return (
    <Stack
      sx={{ backgroundColor: '#212121', color: 'white', padding: 2 }}
      direction="row"
      justifyContent="center"
      spacing={2}
      alignItems="center"
    >
      <Box component="img" src={logoImage} alt="Logo" sx={{ height: 50 }} />
      <Typography variant="body2" textAlign="center" marginTop={2}>
        © {new Date().getFullYear()} Chamal Perera. All rights reserved.
      </Typography>
    </Stack>
  );
};
