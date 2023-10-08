import { ThemeProvider } from '@mui/material';
import { ThemeContext } from 'context';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'routes';
import { darkTheme, lightTheme } from 'theme';

function App() {
  const [mode, setMode] = useState('dark');

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
