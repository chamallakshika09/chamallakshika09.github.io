import { Tabs, Tab } from '@mui/material';

export const ProjectTabs = ({ tabs, tabValue, handleChangeTab }) => {
  return (
    <Tabs
      value={tabValue}
      onChange={handleChangeTab}
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
    >
      <Tab label="All" value="All" />
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} value={tab} />
      ))}
    </Tabs>
  );
};
