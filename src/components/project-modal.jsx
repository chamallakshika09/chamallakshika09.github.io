import { Box, Typography, Modal, Chip, List, ListItem, ListItemText, ListItemIcon, IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContentBox } from 'components';

export const ProjectModal = ({ openModal, handleCloseModal, selectedProject }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
    >
      <ModalContentBox>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
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
      </ModalContentBox>
    </Modal>
  );
};
