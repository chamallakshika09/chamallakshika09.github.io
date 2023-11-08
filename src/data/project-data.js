import preview1 from 'assets/project1-preview.png';
import preview2 from 'assets/project2-preview.png';
export const projectsData = [
  {
    id: 'proj-1',
    title: 'DBF SaaS App',
    description: 'An early stage design application for enterprise clients.',
    imageUrl: preview1,
    projectUrl: 'https://app.saas.bluefoam.io/',
    category: 'Work Project',
    tech: ['React.js', 'Node.js', 'Redux', 'Mongodb', 'Nest.js', 'Three.js', 'AWS', 'Material UI', 'HTML', 'CSS'],
    detailedDescription:
      'This project consists of a frontend design application built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, and a backend application built using Node.js with the Nest.js framework. MongoDB is used as the database, and the applications are deployed in AWS.',
  },
  {
    id: 'proj-2',
    title: 'Generative Design Tool',
    description: 'An AI/ML based generative design tool built for an enterprise client.',
    imageUrl: preview2,
    // projectUrl: '#/projects/project-two',
    category: 'Work Project',
    tech: ['React.js', 'Node.js', 'Redux', 'Mongodb', 'Express.js', 'Three.js', 'AWS', 'Material UI', 'HTML', 'CSS'],
    detailedDescription:
      'This project consists of multiple frontend applications built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, P5.js and a backend application built using Node.js with the Express.js framework. MongoDB is used as the database, and the applications are deployed in AWS and Azure.',
  },
];
