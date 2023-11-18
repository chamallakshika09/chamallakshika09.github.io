import { Container } from '@mui/material';
import { AboutMeBody, AboutMeHero } from 'components';
import { HeaderLayout } from 'layouts';

export const AboutMe = () => {
  return (
    <HeaderLayout>
      <Container maxWidth="lg">
        <AboutMeHero />

        <AboutMeBody />
      </Container>
    </HeaderLayout>
  );
};
