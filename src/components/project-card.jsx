import { Card, CardContent, Typography, CardActions, Button, IconButton, Tooltip, CardMedia } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

export const ProjectCard = ({ project, handleOpenModal }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
      }}
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
      <CardActions
        sx={{
          display: 'flex',
        }}
      >
        <Button size="small" onClick={() => handleOpenModal(project)}>
          Read More
        </Button>
        <div style={{ flexGrow: 1 }} />
        {project.youtubeLink && (
          <Tooltip title="Open Youtube Link">
            <IconButton
              color="inherit"
              onClick={() => window.open(project.youtubeLink)}
              target="_blank"
              aria-label="YouTube link"
            >
              <PlayCircleFilledIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
        {project.githubLink && (
          <Tooltip title="Open Github Link">
            <IconButton
              color="inherit"
              onClick={() => window.open(project.githubLink)}
              target="_blank"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
        {project.projectUrl && (
          <Tooltip title="Open Project Link">
            <IconButton
              color="inherit"
              onClick={() => window.open(project.projectUrl)}
              target="_blank"
              aria-label="Project Link"
            >
              <LaunchIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};
