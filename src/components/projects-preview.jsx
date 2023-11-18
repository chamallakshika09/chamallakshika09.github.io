import { Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ProjectPreviewSlider } from './project-preview-slider';

export const ProjectsPreview = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems="center" spacing={1} sx={{ mt: 4, p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Featured Projects
      </Typography>

      <Stack sx={{ width: { xs: '95%', sm: '90%', md: '85%' }, flexGrow: 1 }}>
        <ProjectPreviewSlider />
      </Stack>

      <Button variant="contained" onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
        View Projects
      </Button>
    </Stack>
  );
};
