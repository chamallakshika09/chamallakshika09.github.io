import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Modal, Box, CardActions, Button } from '@mui/material';
import { educationData } from 'data';
import { HeaderLayout } from 'layouts';

export const Education = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedEducation, setSelectedEducation] = React.useState(null);

  const handleOpenModal = (education) => {
    setSelectedEducation(education);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <HeaderLayout>
      <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
        {educationData.map((edu) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={edu.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
            >
              <CardMedia component="img" image={edu.logo} alt={`${edu.institution} logo`} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {edu.period}
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '0.5rem' }}>
                  {edu.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleOpenModal(edu)}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selectedEducation && (
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
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
            <Typography id="modal-modal-description" sx={{ mt: 2 }} textAlign="justify">
              {selectedEducation.detailedDescription}
            </Typography>
            {selectedEducation.detailedDescription1 && (
              <Typography id="modal-modal-description" sx={{ mt: 2 }} textAlign="justify">
                {selectedEducation.detailedDescription1}
              </Typography>
            )}
          </Box>
        </Modal>
      )}
    </HeaderLayout>
  );
};
