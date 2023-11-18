import { useContext, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
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
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from 'context';
import logoImage from 'assets/logo.png';

const menuItems = [
  { key: 'about-me', text: 'About Me', link: '/about-me' },
  { key: 'experience', text: 'Experience', link: '/experience' },
  { key: 'education', text: 'Education', link: '/education' },
  { key: 'projects', text: 'Projects', link: '/projects' },
  { key: 'achievements', text: 'Achievements', link: '/achievements' },
  { key: 'publications', text: 'Publications', link: '/publications' },
];

export const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { mode, setMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <List>
      {menuItems.map(({ text, key, link }) => (
        <ListItemButton key={key} onClick={() => navigate(link)}>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate('/')}>
          <img src={logoImage} alt="Logo" style={{ height: 40 }} />
        </Button>
        <div style={{ flexGrow: 1 }} />
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
            {menuItems.map(({ text, key, link }) => (
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
