import { Grid } from '@mui/material';
import { ProjectCard } from './project-card';

export const ProjectGrid = ({ filteredProjects, handleOpenModal }) => {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
      {filteredProjects.map((project) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
          <ProjectCard handleOpenModal={handleOpenModal} project={project} />
        </Grid>
      ))}
    </Grid>
  );
};
