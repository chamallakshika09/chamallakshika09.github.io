import gaudiVideo from 'assets/gaudi-builder.mp4';
import gaudiVideo1 from 'assets/gaudi-builder-1.mp4';
import undoRedoDemo from 'assets/undo-redo-demo.mp4';
import threeDemo from 'assets/three-demo.mp4';

export const projectsData = [
  {
    id: 'proj-1',
    title: 'Gaudi Builder',
    description: `
    In collaboration with a colleague, I developed a multiplayer game inspired by Antoni Gaudí's hanging chain model, where players strategically create structures using balls and ropes. The gameplay, centered around the catenary curve concept, blends architectural principles with puzzle-solving, echoing the whimsical and structurally sound designs of Gaudí's Sagrada Família. This project served as both a tribute to Gaudí's architectural ingenuity and an exploration of the fusion between architecture and interactive gaming.`,
    category: 'Personal Project',
    featuredProject: true,
    tech: [
      'React.js',
      'Node.js',
      'Redux',
      'Mongodb',
      'Express.js',
      'Three.js',
      'AWS',
      'Material UI',
      'Javascript',
      'HTML',
      'CSS',
      'socket.io',
      'ammo.js',
    ],
    detailedDescription: `In our multiplayer game project, we implemented a client-server architecture for robust and efficient performance. The frontend was developed using React.js, offering a dynamic and responsive user interface, while the backend was built on Express.js, ensuring stable server-side operations. For real-time collaboration among players, we integrated Socket.io, which facilitated instantaneous communication and interaction within the game environment. The physics of the game, critical in mimicking realistic architectural structures, were handled using the ammo.js bullet physics library, allowing for accurate physical simulations. Additionally, we employed P5.js and Three.js for visualizations, with P5.js enabling creative 2D graphical representations and Three.js providing the framework for immersive 3D renderings, together enhancing the visual appeal and engagement of the game.`,
    tasks: [
      {
        key: 'Project Setup and Configuration',
        value:
          'Led the initial setup and configuration of the project, establishing a robust foundation for development and collaboration.',
      },
      {
        key: 'Socket.io Integration for Real-Time Collaboration',
        value:
          'Implemented Socket.io to facilitate real-time communication and interaction, enhancing the multiplayer aspect of the game.',
      },
      {
        key: 'Frontend Development with React.js',
        value:
          'Developed the dynamic user interface using React.js, ensuring a responsive and engaging player experience.',
      },
      {
        key: 'Backend Development with Express.js',
        value:
          'Developed the backend using Express.js, managing server-side logic and maintaining stable game performance.',
      },
      {
        key: 'Physics Simulation with ammo.js',
        value:
          'Co-integrated ammo.js for realistic physics simulation, replicating the physical behaviors of balls and ropes in the game environment.',
      },
      {
        key: 'Visualization Enhancement with P5.js and Three.js',
        value:
          'Utilized P5.js and Three.js for creating immersive 2D and 3D visualizations, adding aesthetic and interactive dimensions to the game.',
      },
      {
        key: 'Collaborative Component Development',
        value:
          'Worked closely with a colleague to develop various components of the game, fostering teamwork and leveraging combined expertise.',
      },
    ],
    githubLink: 'https://github.com/chamallakshika09/dbf-sample-game',
    videoLink: gaudiVideo1,
    primaryLink: 'https://github.com/chamallakshika09/dbf-sample-game',
  },
  {
    id: 'proj-2',
    title: 'Integrating Three.js with React, Redux and MUI ',
    description: `This sample project serves as a practical demonstration for an article detailing the integration of Three.js with React, Redux, and MUI. It exemplifies how these technologies can be seamlessly combined to create visually rich and interactive 3D web applications, highlighting best practices and efficient methodologies.`,
    category: 'Personal Project',
    featuredProject: true,
    tech: ['React.js', 'Redux', 'Three.js', 'Material UI', 'Javascript', 'HTML', 'CSS'],
    detailedDescription: `In this sample project, created specifically for an instructional article, we delve into the intricacies of integrating Three.js with React, Redux, and Material-UI (MUI). The project showcases the powerful synergy between Three.js's 3D rendering capabilities and React's component-based architecture, further enhanced by Redux's state management efficiency and the aesthetic flexibility of MUI. It serves as a comprehensive guide, demonstrating practical applications and offering insights into creating sophisticated, interactive 3D interfaces within a robust web application framework. This project not only teaches the technical aspects of integration but also illustrates the creative potential unlocked when these advanced technologies are skillfully combined.`,
    tasks: [
      {
        key: 'Project Conceptualization and Design',
        value:
          'Initiated the project with a detailed conceptualization phase, focusing on how to effectively integrate Three.js with React to create dynamic 3D web experiences.',
      },
      {
        key: 'Three.js Integration with React',
        value:
          'Implemented Three.js within the React framework, developing interactive 3D elements and ensuring seamless integration with React’s component lifecycle.',
      },
      {
        key: 'State Management with Redux',
        value:
          'Incorporated Redux for state management, enhancing the application’s responsiveness and data handling capabilities for complex 3D interactions.',
      },
      {
        key: 'UI Development with Material-UI',
        value:
          'Utilized Material-UI (MUI) to design and develop a user-friendly interface, ensuring the application is not only functional but also aesthetically appealing.',
      },
      {
        key: 'Documentation and Article Writing',
        value:
          'Compiled the learning and development process into a comprehensive article, documenting the integration techniques and challenges to aid others in similar endeavors.',
      },
    ],
    githubLink: 'https://github.com/chamallakshika09/react-threejs',
    videoLink: threeDemo,
    primaryLink: 'https://github.com/chamallakshika09/react-threejs',
  },
  {
    id: 'proj-3',
    title: 'Undo/Redo Mechanism in a 3D Application with Redux',
    description: `In this sample project, I focused on crafting a sophisticated Undo/Redo mechanism for a 3D application, demonstrating its implementation using Redux for state management, React for the user interface, and Three.js for 3D rendering. The project serves as a practical case study for an article, highlighting the complexities and solutions involved in integrating these technologies to achieve an intuitive and efficient user experience in 3D environments.`,
    category: 'Personal Project',
    featuredProject: true,
    tech: ['React.js', 'Redux', 'Three.js', 'Material UI', 'Javascript', 'HTML', 'CSS'],
    detailedDescription: `This sample project was developed as an educational exercise to demonstrate the intricacies of implementing a sophisticated Undo/Redo mechanism within a 3D application, utilizing a combination of Redux, React, and Three.js. The core of the project involved harnessing Redux's robust state management capabilities to track and manipulate the application's state history, React's dynamic UI for seamless user interaction, and Three.js's powerful 3D rendering tools for vivid visual representation. The outcome was an article that not only walks through the technical process but also sheds light on the challenges and innovative strategies involved in creating a user-friendly, responsive, and feature-rich 3D application. This project stands as a testament to the potential of combining advanced web technologies to elevate user experience in complex application scenarios.`,
    tasks: [
      {
        key: 'Project Conceptualization and Design',
        value:
          'Initiated the project with a detailed conceptualization phase, focusing on how to effectively integrate Three.js with React to create dynamic 3D web experiences.',
      },
      {
        key: 'Three.js Integration with React',
        value: `Implemented Three.js within the React framework, developing interactive 3D elements and ensuring seamless integration with React's component lifecycle.`,
      },
      {
        key: 'State Management with Redux',
        value: `Incorporated Redux for state management, enhancing the application's responsiveness and data handling capabilities for complex 3D interactions.`,
      },
      {
        key: 'UI Development with Material-UI',
        value:
          'Utilized Material-UI (MUI) to design and develop a user-friendly interface, ensuring the application is not only functional but also aesthetically appealing.',
      },
      {
        key: 'Documentation and Article Writing',
        value:
          'Compiled the learning and development process into a comprehensive article, documenting the integration techniques and challenges to aid others in similar endeavors.',
      },
    ],
    githubLink: 'https://github.com/chamallakshika09/threejs-undo-redo',
    videoLink: undoRedoDemo,
    primaryLink: 'https://github.com/chamallakshika09/threejs-undo-redo',
  },
  {
    id: 'proj-4',
    title: 'DBF SaaS product',
    description:
      'An advanced online platform designed to revolutionize building design in the AEC (Architecture, Engineering, and Construction) sector, offering tools that streamline the design process and enhance project quality. This platform uniquely integrates data-driven insights, enabling architects and engineers to make informed decisions and optimize construction projects for better efficiency and outcomes.',
    category: 'Work Project',
    featuredProject: false,
    tech: [
      'React.js',
      'Node.js',
      'Redux',
      'Mongodb',
      'Nest.js',
      'Three.js',
      'AWS',
      'Material UI',
      'Javascript',
      'HTML',
      'CSS',
    ],
    detailedDescription:
      'This project encompasses a sophisticated frontend design application, expertly constructed using React for dynamic interface creation, Redux for effective state management, and Three.js for advanced 3D rendering. Complementing these are HTML and CSS for foundational web structure and styling, all unified through the Material UI framework for a cohesive and intuitive user experience. On the backend, the application leverages the power of Node.js, combined with the Nest.js framework, to offer a robust and scalable server-side solution. MongoDB is integrated as the database, providing reliable and efficient data storage and retrieval. The entire application stack is strategically deployed on AWS, ensuring optimal performance, scalability, and accessibility in a cloud-based environment. ',
    tasks: [
      {
        key: 'Frontend Architecture Design',
        value:
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        key: 'State Management Strategy',
        value:
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        key: 'Undo/Redo Mechanism Development',
        value: 'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        key: 'Frontend Authentication System',
        value:
          'Developed and integrated all frontend authentication components and pages, ensuring secure user access and data protection.',
      },
      {
        key: 'Project Collaboration Feature',
        value:
          'Implemented project sharing capabilities, facilitating collaboration and teamwork within the application.',
      },
      {
        key: 'Dashboard Functionalities',
        value:
          'Developed key functionalities in dashboards, contributing to a more interactive and user-friendly interface.',
      },
      {
        key: 'Three.js Integration',
        value:
          'Implemented specific functions including initial scene setup using Three.js, adding advanced 3D graphical capabilities to the application',
      },
      {
        key: 'Code Review Leadership',
        value:
          'Conducted thorough code reviews on frontend applications, upholding high standards of code quality and consistency.',
      },
      {
        key: 'Mentorship and Team Leadership',
        value:
          'Actively mentored junior developers, fostering skill development and promoting best practices within the team.',
      },
    ],
    projectUrl: 'https://app.saas.bluefoam.io/',
    primaryLink: 'https://app.saas.bluefoam.io/',
  },
  {
    id: 'proj-5',
    title: 'Generative Design Tool',
    description:
      'An innovative Minimum Viable Product (MVP) leveraging AI and machine learning algorithms for generative design in hospital master planning, tailored specifically for an enterprise client. This cutting-edge solution streamlines the planning process by intelligently generating optimized layouts and design options, significantly enhancing efficiency and decision-making in healthcare infrastructure development.',
    category: 'Work Project',
    featuredProject: false,
    tech: [
      'React.js',
      'Node.js',
      'Redux',
      'Mongodb',
      'Express.js',
      'Three.js',
      'AWS',
      'Material UI',
      'Javascript',
      'HTML',
      'CSS',
      'P5.js',
    ],
    detailedDescription:
      'This comprehensive project features several frontend applications, each meticulously crafted using a blend of modern technologies: React for building dynamic user interfaces, Redux for state management, and Three.js for immersive 3D graphics, along with HTML and CSS for structuring and styling. Material UI and P5.js are also integrated, enhancing the aesthetic appeal and interactive capabilities. Complementing the frontend, the backend is developed using Node.js and the Express.js framework, ensuring robust server-side operations. MongoDB is employed as the database solution, offering scalable and efficient data management. The entire suite of applications is deployed across both AWS and Azure cloud platforms, capitalizing on their strengths to maximize reliability, scalability, and performance. This project exemplifies a harmonious integration of diverse technologies to create a seamless and engaging experience across multiple applications.',
    tasks: [
      {
        key: 'Frontend Architecture Design',
        value:
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        key: 'State Management Strategy',
        value:
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        key: 'Undo/Redo Mechanism Development',
        value: 'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        key: 'Frontend Component Engineering',
        value:
          'Expertly crafted and implemented key frontend components, contributing to a seamless and intuitive user interface experience.',
      },
      {
        key: 'Metropolis Algorithm Enhancement',
        value:
          'Implemented and refined functions for the Metropolis algorithm, significantly boosting its performance and optimization levels.',
      },
      {
        key: 'Advanced Visualization Development',
        value:
          "Pioneered the development of complex visualizations using Three.js and p5.js, enhancing the application's interactive and graphical capabilities.",
      },
      {
        key: 'Code Review Leadership',
        value:
          'Conducted thorough code reviews on frontend applications, upholding high standards of code quality and consistency.',
      },
      {
        key: 'Mentorship and Team Leadership',
        value:
          'Actively mentored junior developers, fostering skill development and promoting best practices within the team.',
      },
    ],
  },
  {
    id: 'proj-6',
    title: 'DBF Play V1',
    description:
      'Developed an advanced online platform specifically tailored to facilitate early-stage building design and urban planning within the AEC (Architecture, Engineering, and Construction) sector. This tool streamlines the design process, offering innovative features and resources that cater to the intricate needs of architects, engineers, and city planners.',
    category: 'Work Project',
    featuredProject: false,
    tech: [
      'React.js',
      'Node.js',
      'Redux',
      'Mongodb',
      'Express.js',
      'Three.js',
      'AWS',
      'Material UI',
      'Javascript',
      'HTML',
      'CSS',
    ],
    detailedDescription:
      'This project showcases a robust frontend design application, masterfully built using React for dynamic UI rendering, Redux for efficient state management, and Three.js for advanced 3D modeling, all seamlessly integrated with HTML, CSS, and Material UI for a polished and responsive user experience. The backend, powered by Node.js and leveraging the Express.js framework, provides sturdy server-side functionality, while MongoDB serves as the database, ensuring data integrity and scalability, with the entire application suite efficiently deployed on AWS for high availability and performance.',
    tasks: [
      {
        key: 'Frontend Architecture Design',
        value:
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        key: 'State Management Strategy',
        value:
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        key: 'Undo/Redo Mechanism Development',
        value: 'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        key: 'Frontend Component Engineering',
        value:
          'Expertly crafted and implemented key frontend components, contributing to a seamless and intuitive user interface experience.',
      },
      {
        key: 'Dashboard Functionalities',
        value:
          'Developed key functionalities in dashboards, contributing to a more interactive and user-friendly interface.',
      },
      {
        key: 'Selection Mechanism Overhaul',
        value:
          'Innovatively revamped the existing selection mechanism to enable multi-item selection, integrating advanced post-processing techniques to highlight selections effectively.',
      },
      {
        key: 'Plot and Site Boundary Editing Enhancement',
        value:
          'Spearheaded the development of an intuitive plot and site boundary editing functionality, streamlining the process for precise and efficient spatial modifications.',
      },
      {
        key: 'Code Review Leadership',
        value:
          'Conducted thorough code reviews on frontend applications, upholding high standards of code quality and consistency.',
      },
      {
        key: 'Mentorship and Team Leadership',
        value:
          'Actively mentored junior developers, fostering skill development and promoting best practices within the team.',
      },
    ],
    projectUrl: 'https://auth.app.bluefoam.io/',
    primaryLink: 'https://auth.app.bluefoam.io/',
  },
  {
    id: 'proj-7',
    title: 'DBF Hub',
    description:
      'A desktop application to facilitate seamless data synchronization between the DBF app and architectural software like Revit and Archicad, significantly streamlining the workflow in architectural design processes.',
    category: 'Work Project',
    featuredProject: false,
    tech: ['React.js', 'Electron.js', 'Redux', 'AWS', 'Material UI', 'Javascript', 'HTML', 'CSS', 'Python'],
    detailedDescription:
      'This project features a comprehensive desktop application meticulously crafted from the ground up using Electron.js. It integrates a blend of technologies including React for efficient UI development, Redux for state management, along with HTML and CSS for layout and styling, all unified under the Material UI framework. As the sole developer, I spearheaded every aspect of this application, from initial concept through to final implementation, demonstrating a deep understanding of these technologies and a commitment to creating a robust, user-friendly software solution. This endeavor showcases my capabilities in full-stack development and my proficiency in translating complex requirements into a functional and aesthetically pleasing application.',
    tasks: [
      {
        key: 'Legacy System Application Overhaul',
        value:
          'Orchestrated a comprehensive redesign of the application, modernizing and enhancing functionality while leveraging the existing legacy system infrastructure.',
      },
      {
        key: 'State Management Strategy',
        value:
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        key: 'Full-Stack Application Development',
        value:
          'Led the ground-up creation of the entire application, encompassing user interface design, Redux architecture implementation, and core logic development, ensuring a cohesive and efficient user experience.',
      },
    ],
  },
  {
    id: 'proj-8',
    title: 'DBF Sync Revit Plugin',
    description: 'A specialized plugin for Revit, designed to synchronize data seamlessly between DBF apps and Revit',
    category: 'Work Project',
    featuredProject: false,
    tech: ['C#', 'Revit API'],
    detailedDescription:
      'This plugin was built utilizing the C# programming language and the Revit API. This plugin is specifically designed to facilitate seamless data synchronization between DBF applications and Revit. The development involved leveraging the powerful capabilities of the Revit API to ensure smooth, real-time data integration, thereby optimizing architectural workflows and project efficiency. This tool represents a significant advancement in bridging software ecosystems within the architectural design realm.',
    tasks: [
      {
        key: 'Plugin Architecture and Development',
        value:
          'Spearheaded the entire design and development process of the plugin, meticulously building it from scratch to ensure seamless integration and functionality within the Revit environment.',
      },
      {
        key: 'Executable Creation for Revit Installation',
        value:
          'Masterminded and crafted the executable packages, streamlining the installation process for the Revit plugin, thereby enhancing user accessibility and ease of deployment.',
      },
    ],
  },
  {
    id: 'proj-9',
    title: 'House Masterplanning Tool',
    description:
      'An online platform to streamline the design and approval process of prefabricated houses, enhancing workflow efficiency for an enterprise client. The platform facilitates easy submission, review, and approval of designs, bolstering collaboration and project management in the housing sector',
    category: 'Work Project',
    featuredProject: false,
    tech: [
      'React.js',
      'Node.js',
      'Redux',
      'Mongodb',
      'Express.js',
      'Three.js',
      'AWS',
      'Material UI',
      'Javascript',
      'HTML',
      'CSS',
      'P5.js',
    ],
    detailedDescription:
      'The frontend is meticulously crafted using React for its efficient rendering capabilities, Redux for state management, and Three.js for 3D modeling, combined with HTML and CSS for structuring and styling, all integrated within the Material UI framework for a cohesive user interface. On the backend, the application is powered by Node.js, utilizing the Express.js framework for robust server-side functionality. MongoDB is employed as the database solution, providing scalable and efficient data storage. The entire system is deployed on AWS, ensuring reliable hosting and performance, and leveraging cloud capabilities for enhanced accessibility and security. ',
    tasks: [
      {
        key: 'Frontend Architecture Design',
        value:
          'Spearheaded the design and setup of the frontend project architecture, ensuring a solid foundation for application development.',
      },
      {
        key: 'State Management Strategy',
        value:
          'Formulated and implemented a comprehensive application state management strategy, optimizing for performance and scalability.',
      },
      {
        key: 'Undo/Redo Mechanism Development',
        value: 'Engineered a robust undo/redo mechanism, enhancing user experience and application reliability.',
      },
      {
        key: 'Frontend Component Engineering',
        value:
          'Expertly crafted and implemented key frontend components, contributing to a seamless and intuitive user interface experience.',
      },
      {
        key: 'Dashboard Functionalities',
        value:
          'Developed key functionalities in dashboards, contributing to a more interactive and user-friendly interface.',
      },
      {
        key: 'Enhancement of 2D and 3D Floor Plan Editors',
        value:
          'Played a pivotal role in developing and refining functions within the 2D and 3D editors of the floor plan editor, enhancing both the functionality and user experience in architectural design visualization.',
      },
    ],
  },
  {
    id: 'proj-10',
    title: 'DBF Beta',
    description:
      'This is the legacy application of DBF SaaS and enterprise apps. This is an online platform to assist in early stage building design and city planning for the AEC (Architecture, Engineering, and Construction) sector',
    category: 'Work Project',
    featuredProject: false,
    tech: ['Javascript', 'HTML', 'CSS', 'EJS', 'jQuery', 'Node.js', 'Express.js', 'Mongodb', 'Three.js', 'AWS'],
    detailedDescription: `The project was centered around an Express.js application, where EJS (Embedded JavaScript) was strategically utilized as the template engine, enhancing the server-side rendering capabilities. This setup allowed for dynamic content generation, providing a seamless and interactive user experience. MongoDB was integrated as the database solution, chosen for its scalability and flexibility, which was crucial in managing data effectively. The entire application infrastructure was deployed on AWS (Amazon Web Services), leveraging the platform's robust and reliable cloud hosting services. `,
    tasks: [
      {
        key: 'Frontend Component Engineering',
        value:
          'Expertly crafted and implemented key frontend components, contributing to a seamless and intuitive user interface experience.',
      },
    ],
  },
  {
    id: 'proj-11',
    title: 'Varnik',
    description:
      'This project entailed developing an innovative AR/VR Application Generation Platform, designed to create immersive augmented and virtual reality experiences. The platform integrates cutting-edge technologies to enable users to effortlessly design and deploy interactive AR/VR applications for various use cases.',
    category: 'Work Project',
    featuredProject: false,
    tech: ['Vue.js', 'PHP', 'VueX', 'Vuetify', 'Laravel', 'AWS', 'Javascript', 'HTML', 'CSS', 'MySQL'],
    detailedDescription:
      'This project featured a comprehensive CMS built with Vue.js for the frontend, offering a dynamic and user-friendly interface. The backend was developed using PHP with the Laravel framework, ensuring robust and scalable server-side functionality. MySQL was chosen as the database solution, providing efficient data management and storage. The entire system was seamlessly deployed on AWS, leveraging cloud capabilities for enhanced performance, reliability, and scalability. This architecture not only facilitated efficient content management but also ensured a streamlined and secure operation, catering to the complex needs of modern web applications.',
    tasks: [
      {
        key: 'Frontend Development',
        value:
          'Contributed to the development of frontend features using Vue.js, ensuring a smooth user experience and interface.',
      },
      {
        key: 'Cloud Infrastructure Management',
        value:
          'Managed the AWS cloud infrastructure, overseeing the setup and maintenance for optimal performance and scalability.',
      },
      {
        key: 'Deployment Architecture Consultation',
        value:
          'Provided expertise in deployment architecture, ensuring efficient and reliable application deployment strategies.',
      },
    ],
  },
  {
    id: 'proj-12',
    title: 'Canvassing Management System',
    description:
      "L K Simulations' own product, designed for effective canvassing management with integrated web and mobile application solutions.",
    category: 'Work Project',
    featuredProject: false,
    tech: ['React', 'Redux', 'React Native', 'Firebase', 'Javascript', 'HTML', 'CSS'],
    detailedDescription: `System seamlessly integrates a trio of applications to cater to diverse user needs. The web application, built with React, offers a dynamic and responsive user interface, while the accompanying mobile application, developed in React Native, ensures a consistent and engaging experience across both iOS and Android devices. The backbone of our system, an Express.js-based backend, efficiently handles server-side logic, interfacing smoothly with Firebase for robust data storage and deployment solutions. This cohesive blend of technologies ensures a scalable, responsive, and user-friendly platform, delivering a seamless experience across web and mobile interfaces.`,
    tasks: [
      {
        key: 'System Design',
        value:
          'Architected the overall structure of the Canvassing Management System, ensuring robustness and scalability.',
      },
      {
        key: 'Web and Mobile Application Development',
        value:
          'Contributed to the development of both web and mobile interfaces, utilizing React and React Native to create a cohesive user experience.',
      },
    ],
  },
  {
    id: 'proj-13',
    title: 'Staff Transport Management System',
    description:
      'A comprehensive transport management solution designed by L K Simulations, focusing on streamlining staff transportation logistics.',
    category: 'Work Project',
    featuredProject: false,
    tech: [
      'React',
      'Redux',
      'React Native',
      'Express',
      'MongoDB',
      'Jest',
      'Enzyme',
      'Docker',
      'Javascript',
      'HTML',
      'CSS',
    ],
    detailedDescription: `Staff Transport Management System is a comprehensive solution designed to streamline transport operations. It features a robust web application built with React, ensuring a responsive and user-friendly interface for desktop users. Complementing this is a mobile application developed using React Native, providing a seamless and efficient experience on both iOS and Android platforms. The system's backbone is an Express.js-based backend, which efficiently handles all server-side operations and interacts seamlessly with MongoDB, our chosen database for reliable data management. Together, this integration of technologies creates a cohesive and effective system for managing staff transportation needs.`,
    tasks: [
      {
        key: 'System Design and Development',
        value:
          'Led the architectural design of the Staff Transport Management System, ensuring a user-friendly interface and robust backend.',
      },
      {
        key: 'Full-Stack Application Contribution',
        value:
          'Actively contributed to the development of web and mobile applications, as well as the backend API, leveraging a diverse technology stack for seamless functionality.',
      },
    ],
  },
  {
    id: 'proj-14',
    title: 'Electronic Logbook and Fishery Management Support System',
    description:
      'A research project for the Department of Fisheries & Aquatic Resources (DFAR), Sri Lanka, focusing on improving fishery management and reporting.',
    category: 'Research Project',
    featuredProject: false,
    tech: ['Java SE', 'MySQL', 'Android', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    detailedDescription: `System is an integrated suite of applications designed to cater to diverse operational needs. It includes a set of Android mobile applications, offering on-the-go functionality and accessibility. Complementing the mobile apps is a PHP-based web application, dedicated to monitoring and management tasks, ensuring centralized control and oversight. Additionally, the system features several Java desktop applications, providing robust functionality for more complex operations. All these components are unified through a MySQL database, which serves as a reliable backbone for data storage and retrieval, ensuring seamless data flow and consistency across the different applications.`,
    tasks: [
      {
        key: 'System Architecture and Database Design',
        value:
          'Collaboratively architected the system and designed its database, laying a robust foundation for efficient data management and system functionality.',
      },
      {
        key: 'Java Desktop Application Development',
        value:
          'Developed a Java desktop application for management information collection, enhancing the system’s data aggregation capabilities.',
      },
      {
        key: 'Mobile Application Contribution',
        value:
          'Actively contributed to the development of mobile applications, focusing on user-centric features and seamless data integration.',
      },
      {
        key: 'System Deployment and Stakeholder Training',
        value: `Managed the system's deployment and conducted training sessions for stakeholders, ensuring effective usage and smooth operation.`,
      },
      {
        key: 'Presentation to EU Delegation',
        value: `Presented the system to the EU delegation, demonstrating its capabilities and compliance as part of the review process for the ban on fishery exports.`,
      },
    ],
  },
  {
    id: 'proj-15',
    title: 'Siyara Vessel Traffic Management System',
    description:
      'An award-winning research project from the University of Colombo School of Computing, in collaboration with Sri Lanka Ports Authority and Sri Lanka Coast Guard, focused on enhancing maritime traffic management.',
    category: 'Research Project',
    featuredProject: false,
    tech: ['Android', 'PHP', 'MySQL', 'C++', 'OpenCPN', 'OGRE3D', 'C# WPF'],
    detailedDescription: `System features a diverse array of applications tailored for specialized monitoring and data collection. Central to this system is a C++ AIS Decoder application, designed for efficient signal processing. We complemented this with a 2D monitoring application, developed using C++ and WXWidgets, offering streamlined surveillance capabilities. For more immersive monitoring, a 3D application was created using C++ and Ogre3D, providing detailed visual representations. Additionally, the suite includes Android mobile applications, designed for on-the-go monitoring and data collection. The entire system is underpinned by a MySQL database, ensuring consistent and reliable data management across all applications.`,
    tasks: [
      {
        key: '2D Monitoring Application Revamp',
        value:
          'Revamped the existing 2D monitoring application, enhancing its performance and capabilities for more efficient surveillance.',
      },
      {
        key: 'Android Monitoring Application Contribution',
        value:
          'Actively contributed to the development of the Android monitoring application, focusing on improving its functionality and user experience.',
      },
      {
        key: 'Data Collection Mobile Applications Development',
        value:
          'Implemented specialized mobile applications for tugs, pilot vessels, and monitoring stations to streamline the data collection process.',
      },
      {
        key: 'AIS Decoder Enhancement',
        value:
          'Contributed to the enhancement of the AIS decoder application, extending its capabilities to decode additional AIS messages.',
      },
      {
        key: 'System Deployment at SL Coast Guard Headquarters',
        value:
          'Managed the deployment of the entire system at the Sri Lanka Coast Guard headquarters in Mirissa, ensuring seamless integration and functionality.',
      },
      {
        key: 'User Training for SLCG Personnel',
        value:
          'Conducted comprehensive training sessions for Sri Lanka Coast Guard personnel, ensuring effective system utilization and operation.',
      },
    ],
    youtubeLink: 'https://youtu.be/TCwe-GrE8QQ?si=qLyz5cdwyP7-Ps7L',
    primaryLink: 'https://youtu.be/TCwe-GrE8QQ?si=qLyz5cdwyP7-Ps7L',
  },
  {
    id: 'proj-16',
    title: 'Vidusayura Ship Handling Simulator',
    description:
      'An award-winning research project from the University of Colombo School of Computing, in collaboration with Ocean University, Sri Lanka, focused on developing a state-of-the-art ship handling simulator.',
    category: 'Research Project',
    featuredProject: false,
    tech: ['C++', 'OpenCPN', 'WxWidgets', 'OGRE3D'],
    detailedDescription: ` system was a comprehensive suite of applications, each tailored for specific simulation and monitoring functionalities within a robust framework. It included a 3D simulator, both client and server, developed using C++ and Ogre3D, offering high-quality, real-time visualizations. Complementing this was a 2D Electronic Chart Display (ECDIS) application, crafted with C++ and WXWidgets, providing detailed navigational information and charting capabilities. Additionally, the system featured Android mobile applications designed for displaying various instrument readouts, enhancing accessibility and convenience. Central to all these components was a MySQL database, which ensured consistent and efficient data management across the entire system, maintaining data integrity and streamlined operations.`,
    tasks: [
      {
        key: 'Electronic Chart Display Development',
        value:
          'Developed the Electronic Chart Display and Information System (ECDIS), a crucial component that significantly enhanced the simulator’s navigational functionalities and user interface.',
      },
      {
        key: 'Instrument Display Mobile Applications Development',
        value:
          'Created and fine-tuned mobile applications for instrument displays, focusing on user-friendly interfaces and real-time data presentation to augment the overall simulation experience.',
      },
      {
        key: '3D Simulator Client and Server Contribution',
        value:
          'Contributed to the development of both the client and server sides of the 3D simulator, ensuring seamless integration and robust performance of the simulation environment.',
      },
      {
        key: 'Deployment and Training at Ocean University, Sri Lanka',
        value: `Managed the system's deployment at Ocean University, Sri Lanka, and conducted extensive training sessions for the personnel, facilitating effective system adoption and utilization.`,
      },
    ],
    youtubeLink: 'https://youtu.be/LVdEw_rmOT0?si=D-ylkVR3Yvl4KXbN',
    primaryLink: 'https://youtu.be/LVdEw_rmOT0?si=D-ylkVR3Yvl4KXbN',
  },
];
