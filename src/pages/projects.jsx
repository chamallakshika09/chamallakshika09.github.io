import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { projectsData } from 'data';
import { HeaderLayout } from 'layouts';

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
    <HeaderLayout>
      <Tabs value={tabValue} onChange={handleChangeTab} centered>
        <Tab label="All" value="All" />
        {getTabs().map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>

      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <Paper elevation={3} sx={{ ':hover': { transform: 'scale(1.05)', transition: '0.3s' } }}>
              <Card>
                <CardActionArea onClick={() => handleOpenModal(project)}>
                  <CardMedia
                    component="img"
                    image={project.imageUrl}
                    alt={project.title}
                    sx={{ height: 140, width: 'auto' }}
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
            </Paper>
          </Grid>
        ))}
      </Grid>

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
              width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            <Typography id="project-modal-title" variant="h6" component="h2">
              {selectedProject.title}
            </Typography>
            <Typography id="project-modal-description" sx={{ mt: 2 }} textAlign="justify">
              {selectedProject.detailedDescription}
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Key Tasks:</Typography>
            <List disablePadding>
              {selectedProject.tasks.map(({ key, value }) => (
                <ListItem key={key} disablePadding>
                  <ListItemIcon>
                    <CircleIcon sx={{ fontSize: 16 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={key}
                    secondary={value}
                    primaryTypographyProps={{ sx: { fontWeight: 'bold' } }}
                    secondaryTypographyProps={{ textAlign: 'justify' }}
                  />
                </ListItem>
              ))}
            </List>
            <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Tools and Technologies:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
              {selectedProject.tech.map((technology, index) => (
                <Chip key={index} label={technology} variant="outlined" sx={{ mb: 1 }} />
              ))}
            </Box>
          </Box>
        </Modal>
      )}
    </HeaderLayout>
  );
};
