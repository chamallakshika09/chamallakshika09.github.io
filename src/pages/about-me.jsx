import { Box, Container, Typography, Avatar, Grid, Button } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import Header from 'components/header';
import ProfilePhoto from 'assets/my-photo.png';
import { EducationTimeline, ExperienceTimelIne, HobbiesAndInterests, SkillsSection } from 'components';

export const AboutMe = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ my: 5 }}>
          <Grid container spacing={3} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={4}>
              <Avatar
                src={ProfilePhoto}
                alt="Chamal Perera"
                sx={{
                  width: 120,
                  height: 120,
                  margin: 'auto',
                  border: 4,
                  borderColor: 'background.paper',
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom>
                Hi, I'm Chamal Lakshika Perera
              </Typography>
              <Typography variant="h6" color="primary.main" sx={{ mb: 2 }}>
                Tech Lead & Full-Stack Software Engineer
              </Typography>
              <Typography variant="body1" paragraph>
                As a seasoned Tech Lead, I relish the challenge of making projects not only function seamlessly but also
                shine in terms of design and user experience. My role is akin to that of a ship's captain, navigating
                through the complexities of software development to ensure that we're headed towards the right
                technological horizons.
              </Typography>
              <Typography variant="body1" paragraph>
                My toolkit includes a robust array of technologies such as React, Node.js, JavaScript, HTML, and CSS,
                enabling me to architect and construct efficient, scalable web applications. I take pride in writing
                clean, maintainable code that stands the test of time and serves as a strong foundation for technical
                solutions.
              </Typography>
              <Typography variant="body1" paragraph>
                Beyond the code, I am passionate about mentorship, investing time in supporting junior developers as
                they learn and grow in the field. The collaborative journey of knowledge-sharing is one that continually
                inspires and drives my professional journey.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                startIcon={<GetAppIcon />}
                href="/path-to-resume.pdf"
                download
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Professional Summary
          </Typography>
          <Typography variant="body1" paragraph>
            With a commanding grasp of full-stack technologies, I lead from the front as a Tech Lead, steering complex
            projects to successful completion. My hands-on expertise in React, Node.js, and modern JavaScript frameworks
            allows me to craft responsive and dynamic web applications that stand out in the digital landscape.
          </Typography>
          <Typography variant="body1" paragraph>
            I bring more than just technical skills to the table; I'm a guide and a mentor, fostering a culture of
            continuous learning and knowledge exchange. My approach to leadership is grounded in the belief that a
            strong team is built on collaboration, mutual respect, and a shared commitment to excellence.
          </Typography>
          <Typography variant="body1" paragraph>
            I am well-versed in the entire software development lifecycle, and I excel in creating robust technical
            architectures and leading cross-functional teams. My goal is to build systems that are not only technically
            sound but also deliver a seamless user experience.
          </Typography>
          <Typography variant="body1" paragraph>
            Innovating with each line of code, I am dedicated to pushing the boundaries of what's possible, crafting
            digital solutions that are both scalable and sustainable. Whether it's refining backend processes or
            polishing front-end features, my focus is on delivering value and quality in every aspect of the development
            process.
          </Typography>
          <Typography variant="body1" paragraph>
            I take pride in my work and stand ready to tackle the challenges of the future, leveraging technology to
            make a positive impact in the world of software engineering.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" gutterBottom>
            Professional Experience
          </Typography>

          <ExperienceTimelIne />

          <Typography variant="h6" sx={{ mt: 2 }}>
            Notable Achievements
          </Typography>
          <ul>
            <li>
              <Typography variant="body1" paragraph>
                Overall Gold Award at the National Best Quality Software Awards (NBQSA) 2013, recognizing outstanding
                quality and achievements in software development.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Gold Award in the Research & Development category at National Best Quality Software Awards (NBQSA) 2013,
                awarded for demonstrating exceptional innovation and technical proficiency.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" paragraph>
                Represented Sri Lanka at the Asia Pacific ICT Alliance Awards (APICTA) 2013 in Hong Kong, showcasing
                excellence in information and communication technology across the region.
              </Typography>
            </li>
          </ul>
        </Box>

        <EducationTimeline />

        <SkillsSection />

        <HobbiesAndInterests />
      </Container>
    </Box>
  );
};
