import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Modal, Box } from '@mui/material';
import Header from 'components/header';
import UcscLogo from 'assets/ucsc-logo.png';

// Sample data for educational background
const educationData = [
  {
    id: 'edu-1',
    institution: 'University of Colombo School of Computing',
    degree: 'Master of Computer Science',
    period: 'January 2015 - June 2018',
    logo: UcscLogo,
    description: 'A brief overview or highlight of your experience at this institution.',
    // Add more details for modal if needed
  },
  {
    id: 'edu-2',
    institution: 'University of Colombo School of Computing',
    degree: 'Bachelor of Computer Science',
    period: 'August 2010 - April 2014',
    logo: UcscLogo,
    description: 'A brief overview or highlight of your experience at this institution.',
    // Add more details for modal if needed
  },
  // ... more education
];

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
    <Box>
      <Header />
      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {educationData.map((edu) => (
          <Grid item xs={12} sm={6} md={4} key={edu.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" image={edu.logo} alt={`${edu.institution} logo`} sx={{ width: '100%' }} />
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
                <Button size="small" onClick={() => handleOpenModal(edu)}>
                  Learn More
                </Button>
              </CardContent>
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
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
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
    </Box>
  );
};
