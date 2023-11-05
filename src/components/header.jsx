import React, { useContext } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemText,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ThemeContext } from 'context';

const menuItems = ['Chamal Perera', 'About Me', 'Experience', 'Education', 'Projects', 'Achievements', 'Contact'];

const Header = () => {
  const theme = useTheme();

  const { mode, setMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {menuItems.slice(1).map((text) => (
        <ListItemButton key={text}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Chamal Perera
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
              }}
              color="inherit"
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </>
        ) : (
          <div>
            {menuItems.slice(1).map((text) => (
              <Button key={text} color="inherit">
                {text}
              </Button>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
              }}
              color="inherit"
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
