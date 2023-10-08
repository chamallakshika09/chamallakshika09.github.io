import { createTheme } from '@mui/material/styles';
import { typography } from './typography';
import { palette } from './palette';

export const lightTheme = createTheme({
  palette,
  typography,
});

export const darkTheme = createTheme({
  palette: { ...palette, mode: 'dark' },
  typography,
});
