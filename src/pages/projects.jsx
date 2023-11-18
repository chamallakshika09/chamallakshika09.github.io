import { useState } from 'react';
import { projectsData } from 'data';
import { HeaderLayout } from 'layouts';
import { ProjectGrid, ProjectModal, ProjectTabs } from 'components';

const getTabs = () => {
  const tabs = new Set();

  projectsData.forEach((project) => {
    if (!tabs.has(project.category)) tabs.add(project.category);
  });

  return Array.from(tabs);
};

export const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [tabValue, setTabValue] = useState('All');

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const filteredProjects = projectsData.filter((project) => tabValue === 'All' || project.category === tabValue);
  return (
    <HeaderLayout>
      <ProjectTabs handleChangeTab={handleChangeTab} tabValue={tabValue} tabs={getTabs()} />

      <ProjectGrid filteredProjects={filteredProjects} handleOpenModal={handleOpenModal} />

      {selectedProject && (
        <ProjectModal handleCloseModal={handleCloseModal} openModal={openModal} selectedProject={selectedProject} />
      )}
    </HeaderLayout>
  );
};
