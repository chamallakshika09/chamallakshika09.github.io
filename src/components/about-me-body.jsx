import { Grid } from '@mui/material';
import { PersonalQuoteAndGoals } from './personal-quote-and-goals';
import { HobbiesAndInterests } from './hobbies-and-interests';

export const AboutMeBody = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <PersonalQuoteAndGoals />
      </Grid>
      <Grid item xs={12} md={6}>
        <HobbiesAndInterests />
      </Grid>
    </Grid>
  );
};
