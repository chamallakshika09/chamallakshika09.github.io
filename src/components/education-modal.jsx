import { Typography, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContentBox } from 'components';

export const EducationModal = ({ openModal, handleCloseModal, selectedEducation }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="education-modal-title"
      aria-describedby="education-modal-description"
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
        <Typography id="education-modal-title" variant="h6" component="h2">
          {selectedEducation.degree}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 100,
            width: 'auto',
            maxHeight: { xs: 60, md: 100 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="Education logo"
          src={selectedEducation.logo}
        />
        <Typography id="education-modal-description" sx={{ mt: 2 }} textAlign="justify">
          {selectedEducation.detailedDescription}
        </Typography>
        {selectedEducation.detailedDescription1 && (
          <Typography id="education-modal-description" sx={{ mt: 2 }} textAlign="justify">
            {selectedEducation.detailedDescription1}
          </Typography>
        )}
      </ModalContentBox>
    </Modal>
  );
};
