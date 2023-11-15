import { AboutMePreview, ContactCTA, HeroSection, ProjectsPreview } from 'components';
import { HeaderLayout } from 'layouts';

export const Home = () => {
  return (
    <HeaderLayout>
      <HeroSection />
      <AboutMePreview />
      <ProjectsPreview />
      <ContactCTA />
    </HeaderLayout>
  );
};
