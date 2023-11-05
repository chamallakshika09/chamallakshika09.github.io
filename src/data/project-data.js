import preview1 from 'assets/project1-preview.png';
import preview2 from 'assets/project2-preview.png';
export const projectsData = [
  {
    title: 'DBF SaaS App',
    description:
      'An early stage design application for enterprise clients. This project consists of a frontend design application built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, and a backend application built using Node.js with the Nest.js framework. MongoDB is used as the database, and the applications are deployed in AWS.',
    imageUrl: preview1,
    projectUrl: 'https://app.saas.bluefoam.io/',
  },
  {
    title: 'Generative Design Tool',
    description:
      'An AI/ML based generative design tool built for an enterprise client. This project consists of multiple frontend applications built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, P5.js and a backend application built using Node.js with the Express.js framework. MongoDB is used as the database, and the applications are deployed in AWS and Azure.',
    imageUrl: preview2,
    projectUrl: '#/projects/project-two',
  },
  // Add more projects as needed
];
