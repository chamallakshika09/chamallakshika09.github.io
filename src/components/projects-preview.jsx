import React from 'react';
import { Typography, Card, CardContent, Button, Stack, CardActions } from '@mui/material';
import Slider from 'react-slick';
import { projectsData } from 'data';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ left: '-40px', display: 'block', top: '50%', transform: 'translate(0, -50%)', position: 'absolute' }}
    >
      <NavigateBeforeIcon />
    </IconButton>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ right: '-40px', display: 'block', top: '50%', transform: 'translate(0, -50%)', position: 'absolute' }}
    >
      <NavigateNextIcon />
    </IconButton>
  );
};

export const ProjectsPreview = () => {
  const navigate = useNavigate();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Stack alignItems="center" spacing={1} sx={{ mt: 4, p: 4 }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Featured Projects
      </Typography>

      <Stack sx={{ width: { xs: '95%', sm: '90%', md: '85%' }, flexGrow: 1 }}>
        <Slider {...settings}>
          {projectsData
            .filter((project) => project.featuredProject)
            .map((project) => (
              <Card
                sx={{
                  // height: '100% !important',
                  // display: 'flex',
                  // flexDirection: 'column',
                  // justifyContent: 'space-between',
                  width: { xs: '100%', sm: '95% !important' },
                  ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
                }}
              >
                {/* <CardMedia
      component="img"
      image={project.imageUrl}
      alt={project.title}
      sx={{ height: 140, width: 'auto' }}
    /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => window.open(project.projectUrl)}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Slider>
      </Stack>

      <Button variant="contained" onClick={() => navigate('/projects')} sx={{ mt: 2 }}>
        View Projects
      </Button>
    </Stack>
  );
};
