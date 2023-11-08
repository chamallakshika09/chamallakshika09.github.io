import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
  Tabs,
  Tab,
  Chip,
} from '@mui/material';
import Header from 'components/header';
import { projectsData } from 'data';

const getTabs = () => {
  const tabs = new Set();

  projectsData.forEach((project) => {
    if (!tabs.has(project.category)) tabs.add(project.category);
  });

  return Array.from(tabs);
};

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

  const filteredProjects = projectsData.filter((project) => tabValue === 'All' || project.category === tabValue);
  return (
    <Box>
      <Header />
      <Tabs value={tabValue} onChange={handleChangeTab} centered>
        <Tab label="All" value="All" />
        {getTabs().map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>

      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea onClick={() => handleOpenModal(project)}>
                <CardMedia component="img" height="140" image={project.imageUrl} alt={project.title} />
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
              {selectedProject.detailedDescription}
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Tools and Technologies:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {selectedProject.tech.map((technology, index) => (
                <Chip key={index} label={technology} variant="outlined" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Box>
        </Modal>
      )}
    </Box>
  );
};
