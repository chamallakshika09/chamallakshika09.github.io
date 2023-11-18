import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#212121', color: 'white', padding: 3 }}>
      <Typography variant="body2" textAlign="center" marginTop={2}>
        © {new Date().getFullYear()} Chamal Perera. All rights reserved.
      </Typography>
    </Box>
  );
};
