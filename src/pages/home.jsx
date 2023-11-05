import { AboutMeSection, ExperienceSection, HeroSection } from 'components';

import { HeaderLayout } from 'layouts';

export const Home = () => {
  return (
    <HeaderLayout>
      <HeroSection />
      <AboutMeSection />
      <ExperienceSection />
    </HeaderLayout>
  );
};
