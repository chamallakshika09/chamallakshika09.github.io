import { Typography, Box, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContentBox } from './modal-content-box';

export const AchievementModal = ({ openModal, handleCloseModal, selectedAchievement }) => {
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="achievement-modal-title"
      aria-describedby="achievement-modal-description"
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
        <Typography id="achievement-modal-title" variant="h6" component="h2">
          {selectedAchievement.title}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 'auto',
            maxHeight: { xs: 167, md: 233 },
            // maxWidth: { xs: 350, md: 250 },
          }}
          alt="Achievement badge"
          src={selectedAchievement.badge}
        />
        <Typography id="achievement-modal-description" sx={{ mt: 2 }} textAlign="justify">
          {selectedAchievement.detailedDescription}
        </Typography>
      </ModalContentBox>
    </Modal>
  );
};
