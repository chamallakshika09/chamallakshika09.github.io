export const getAppbarHeight = (theme) => {
  if (theme.breakpoints.up('sm')) {
    return '64px';
  }

  if (theme.breakpoints.up('xs')) {
    return '48px';
  }

  return '56px';
};
