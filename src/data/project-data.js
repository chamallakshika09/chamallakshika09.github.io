import preview1 from 'assets/project1-preview.png';
import preview2 from 'assets/project2-preview.png';
export const projectsData = [
  {
    id: 'proj-1',
    title: 'DBF SaaS product',
    description:
      'An online platform to assist in building design, while also integrating data to enhance the quality of construction projects within the AEC (Architecture, Engineering, and Construction) sector',
    imageUrl: preview1,
    projectUrl: 'https://app.saas.bluefoam.io/',
    category: 'Work Project',
    tech: ['React.js', 'Node.js', 'Redux', 'Mongodb', 'Nest.js', 'Three.js', 'AWS', 'Material UI', 'HTML', 'CSS'],
    detailedDescription:
      'This project consists of a frontend design application built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, and a backend application built using Node.js with the Nest.js framework. MongoDB is used as the database, and the applications are deployed in AWS.',
    tasks: [
      {
        'Frontend Architecture Design':
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        'State Management Strategy':
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        'Undo/Redo Mechanism Development':
          'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        'Frontend Authentication System':
          'Developed and integrated all frontend authentication components and pages, ensuring secure user access and data protection.',
      },
      {
        'Project Collaboration Feature':
          'Implemented project sharing capabilities, facilitating collaboration and teamwork within the application.',
      },
      {
        'Dashboard Functionalities':
          'Developed key functionalities in dashboards, contributing to a more interactive and user-friendly interface.',
      },
      {
        'Three.js Integration':
          'Implemented specific functions including initial scene setup using Three.js, adding advanced 3D graphical capabilities to the application',
      },
      {
        'Code Review Leadership':
          'Conducted thorough code reviews on frontend applications, upholding high standards of code quality and consistency.',
      },
      {
        'Mentorship and Team Leadership':
          'Actively mentored junior developers, fostering skill development and promoting best practices within the team.',
      },
    ],
  },
  {
    id: 'proj-2',
    title: 'Generative Design Tool',
    description:
      'An AI/ML based generative design Minimum Viable Product (MVP) for the hospital master planning built for an enterprise client.',
    imageUrl: preview2,
    // projectUrl: '#/projects/project-two',
    category: 'Work Project',
    tech: ['React.js', 'Node.js', 'Redux', 'Mongodb', 'Express.js', 'Three.js', 'AWS', 'Material UI', 'HTML', 'CSS'],
    detailedDescription:
      'This project consists of multiple frontend applications built using React, React Hooks, Redux, Three.js, HTML, CSS, and Material UI, P5.js and a backend application built using Node.js with the Express.js framework. MongoDB is used as the database, and the applications are deployed in AWS and Azure.',
    tasks: [
      {
        'Frontend Architecture Design':
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        'State Management Strategy':
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        'Undo/Redo Mechanism Development':
          'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        'Frontend Component Engineering':
          'Expertly crafted and implemented key frontend components, contributing to a seamless and intuitive user interface experience.',
      },
      {
        'Metropolis Algorithm Enhancement':
          'Implementated and refined functions for the Metropolis algorithm, significantly boosting its performance and optimization levels.',
      },
      {
        'Advanced Visualization Development': `Pioneered the development of complex visualizations using Three.js and p5.js, enhancing the application's interactive and graphical capabilities.`,
      },
      {
        'Code Review Leadership':
          'Conducted thorough code reviews on frontend applications, upholding high standards of code quality and consistency.',
      },
      {
        'Mentorship and Team Leadership':
          'Actively mentored junior developers, fostering skill development and promoting best practices within the team.',
      },
    ],
  },
];
