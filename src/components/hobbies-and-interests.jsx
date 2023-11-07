import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { SportsSoccer, Movie, MusicNote, TravelExplore, FamilyRestroom, Code } from '@mui/icons-material';

export const HobbiesAndInterests = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Hobbies & Interests
      </Typography>
      <List>
        {[
          { icon: <FamilyRestroom />, text: 'Spending time with family and friends' },
          { icon: <SportsSoccer />, text: 'Watching and playing football' },
          { icon: <TravelExplore />, text: 'Travelling with friends' },
          { icon: <MusicNote />, text: 'Listening to music' },
          { icon: <Movie />, text: 'Watching movies and TV series' },
          { icon: <Code />, text: 'Exploring new technologies' },
        ].map((hobby, index) => (
          <ListItem key={index}>
            <ListItemIcon>{hobby.icon}</ListItemIcon>
            <ListItemText primary={hobby.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
