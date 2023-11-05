import { AboutMeSection, HeroSection } from 'components';

import { HeaderLayout } from 'layouts';

export const Home = () => {
  return (
    <HeaderLayout>
      <HeroSection />
      <AboutMeSection />
    </HeaderLayout>
  );
};
