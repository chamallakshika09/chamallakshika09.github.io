import React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent, Grid, Button } from '@mui/material';
import { projectsData } from 'data';

export const ProjectsPreview = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Featured Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projectsData.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea href={project.projectUrl}>
                <CardMedia
                  component="img"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{ height: 200, width: 'auto' }}
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
      <Box textAlign="center" mt={4}>
        <Button variant="contained" href="#/projects">
          View Projects
        </Button>
      </Box>
    </Box>
  );
};
