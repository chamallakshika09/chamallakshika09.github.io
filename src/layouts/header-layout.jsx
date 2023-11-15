import Stack from '@mui/material/Stack';
import { Footer, Header } from 'components';

import { getAppbarHeight } from 'utils';

export const HeaderLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Stack
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          width: '100%',
          minHeight: (theme) => `calc(100vh - ${getAppbarHeight(theme)})`,
        }}
      >
        <div style={{ flex: 1 }}>{children}</div>
        <Footer />
      </Stack>
    </>
  );
};
