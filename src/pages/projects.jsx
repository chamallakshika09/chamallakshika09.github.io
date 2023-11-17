import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Modal,
  Tabs,
  Tab,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CardActions,
  Button,
  IconButton,
  Tooltip,
  CardMedia,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
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
      <Tabs
        value={tabValue}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
      >
        <Tab label="All" value="All" />
        {getTabs().map((tab) => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>

      <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
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
