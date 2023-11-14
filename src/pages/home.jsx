import { AboutMePreview, ContactCTA, Footer, HeroSection, ProjectsPreview } from 'components';
import { HeaderLayout } from 'layouts';

export const Home = () => {
  return (
    <HeaderLayout>
      <HeroSection />
      <AboutMePreview />
      <ProjectsPreview />
      <ContactCTA />
      <Footer />
    </HeaderLayout>
  );
};
