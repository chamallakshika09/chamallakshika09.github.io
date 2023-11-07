import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MovieIcon from '@mui/icons-material/Movie';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CodeIcon from '@mui/icons-material/Code';

export const HobbiesAndInterests = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Hobbies & Interests
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <FamilyRestroomIcon />
          </ListItemIcon>
          <ListItemText primary="Spending time with family and friends" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Watching football matches" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText primary="Playing football" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TravelExploreIcon />
          </ListItemIcon>
          <ListItemText primary="Travelling with friends" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MusicNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Listening to music" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary="Watching movies and TV series" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CodeIcon />
          </ListItemIcon>
          <ListItemText primary="Learning and exploring new technologies" />
        </ListItem>
      </List>
    </Box>
  );
};
