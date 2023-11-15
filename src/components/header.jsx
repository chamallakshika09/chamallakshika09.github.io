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
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { key: 'name', text: 'Chamal Perera', link: '/' },
  { key: 'about-me', text: 'About Me', link: '/about-me' },
  { key: 'experience', text: 'Experience', link: '/experience' },
  { key: 'education', text: 'Education', link: '/education' },
  { key: 'projects', text: 'Projects', link: '/projects' },
  { key: 'achievements', text: 'Achievements', link: '/achievements' },
  { key: 'articles', text: 'Articles', link: '/articles' },
];

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { mode, setMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {menuItems.slice(1).map(({ text, key, link }) => (
        <ListItemButton key={key} onClick={() => navigate(link)}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button key={menuItems[0].key} color="inherit" onClick={() => navigate(menuItems[0].link)}>
            {menuItems[0].text}
          </Button>
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
            {menuItems.slice(1).map(({ text, key, link }) => (
              <Button key={key} color="inherit" onClick={() => navigate(link)}>
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
