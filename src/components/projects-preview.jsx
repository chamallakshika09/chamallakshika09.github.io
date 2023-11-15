import React from 'react';
import { Typography, Card, CardActionArea, CardMedia, CardContent, Grid, Button, Stack } from '@mui/material';
import { projectsData } from 'data';
import { useNavigate } from 'react-router-dom';

export const ProjectsPreview = () => {
  const navigate = useNavigate();
  return (
    <Stack alignItems="center" spacing={1} sx={{ mt: 4, p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Featured Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectsData
          .filter((project) => project.featuredProject)
          .map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea href={project.projectUrl}>
                  <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.title}
                    sx={{ height: 100, width: 'auto' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>

      <Button variant="contained" onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
        View Projects
      </Button>
    </Stack>
  );
};
