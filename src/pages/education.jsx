import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Modal, Box, CardActionArea } from '@mui/material';
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
      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {educationData.map((edu) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={edu.id}>
            <Card>
              <CardActionArea onClick={() => handleOpenModal(edu)}>
                <CardMedia
                  component="img"
                  image={edu.logo}
                  alt={`${edu.institution} logo`}
                  sx={{ height: 100, width: 'auto' }}
                />
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for displaying more information about an educational experience */}
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
              {selectedEducation.degree} - Detailed View
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* Include more detailed information here */}
            </Typography>
          </Box>
        </Modal>
      )}
    </HeaderLayout>
  );
};
