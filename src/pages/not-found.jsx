import { Button, Stack, Typography } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

export const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ width: '100vw', height: '100vh' }}>
      <Typography variant="h4" component="h4" align="center" gutterBottom>
        Page not found :(
      </Typography>
      <Typography variant="h6" component="h1" align="center" gutterBottom>
        Maybe the page you are looking for has been removed, or you typed in the wrong URL
      </Typography>
      <Button onClick={() => navigate('/')}>Go to dashboard</Button>
    </Stack>
  );
};
