import Stack from '@mui/material/Stack';
import { Footer } from 'components';
import Header from 'components/header';
import { getAppbarHeight } from 'utils';

export const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Stack
        flexDirection="column"
        sx={{
          width: '100%',
          // marginTop: (theme) => `${getAppbarHeight(theme)}`,
          height: (theme) => `calc(100vh - ${getAppbarHeight(theme)})`,
        }}
      >
        {children}
        <Footer />
      </Stack>
    </>
  );
};
