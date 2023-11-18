import { Grid, Card, CardContent, CardMedia, Typography, CardActions, Button } from '@mui/material';
import { educationData } from 'data';

export const EducationGrid = ({ handleOpenModal }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
      {educationData.map((edu) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={edu.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
            }}
          >
            <CardMedia component="img" image={edu.logo} alt={`${edu.institution} logo`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {edu.degree}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.period}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
                {edu.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleOpenModal(edu)}>
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
