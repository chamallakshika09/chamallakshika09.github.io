import { Typography, Card, CardContent, Button, CardActions, CardMedia } from '@mui/material';

export const ProjectPreviewCard = ({ project }) => {
  return (
    <Card
      sx={{
        // height: '100% !important',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        width: { xs: '100%', sm: '95% !important' },
        ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
      }}
      key={project.id}
    >
      {project.videoLink && (
        <CardMedia
          component="video"
          controls
          src={project.videoLink}
          alt={`video of ${project.title}`}
          sx={{ height: 140, width: 'auto' }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(project.primaryLink)}>
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};
