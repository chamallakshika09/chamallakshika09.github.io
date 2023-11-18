import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { achievementsData } from 'data';

export const AchievementGrid = ({ handleOpenModal }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
      {achievementsData.map((achievement) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={achievement.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
            }}
          >
            <CardMedia
              component="img"
              image={achievement.image}
              alt={achievement.title}
              sx={{ width: 'auto', height: '200px' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {achievement.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {achievement.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpenModal(achievement)}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
