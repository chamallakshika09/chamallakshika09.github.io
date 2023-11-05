import { Box } from '@mui/material';
import { AboutMePreview, ContactCTA, Footer, HeroSection, ProjectsPreview } from 'components';
import Header from 'components/header';

export const Home = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <AboutMePreview />
      <ProjectsPreview />
      <ContactCTA />
      <Footer />
    </Box>
  );
};
