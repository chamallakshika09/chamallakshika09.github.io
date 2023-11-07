import React, { useState } from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Modal, Box, Tabs, Tab } from '@mui/material';
import Header from 'components/header';
import { Project3DModel } from 'components';

// Example project data
const projectsData = [
  {
    id: 'proj-1',
    category: 'Web Development',
    title: 'Project One',
    description: 'Short description of Project One...',
    image: '/path-to-project-image.jpg',
    // ... other project details
  },
  {
    id: 'proj-2',
    category: '3D Modeling',
    title: 'Project Two',
    description: 'Short description of Project Two...',
    image: '/path-to-project-image.jpg',
    // ... other project details
  },
  // ... more projects
];

export const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tabValue, setTabValue] = useState('All');

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  // Filter projects based on the selected tab
  const filteredProjects = projectsData.filter((project) => tabValue === 'All' || project.category === tabValue);
  return (
    <Box>
      <Header />
      <Tabs value={tabValue} onChange={handleChangeTab} centered>
        <Tab label="All" value="All" />
        <Tab label="Web Development" value="Web Development" />
        <Tab label="3D Modeling" value="3D Modeling" />
        {/* ... other categories as tabs */}
      </Tabs>

      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleOpenModal(project)}>
                <CardMedia component="img" height="140" image={project.image} alt={project.title} />
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

      {/* Modal for displaying more information about a project */}
      {selectedProject && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'auto',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              maxWidth: '90vw',
            }}
          >
            <Typography id="project-modal-title" variant="h6" component="h2">
              {selectedProject.title}
            </Typography>
            <Typography id="project-modal-description" sx={{ mt: 2 }}>
              {/* Include more detailed information or an interactive 3D preview */}
              {/* Check if the project category is 3D Modeling to render the 3D Canvas */}
              {selectedProject.category === '3D Modeling' && <Project3DModel modelPath={selectedProject.modelPath} />}
            </Typography>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
