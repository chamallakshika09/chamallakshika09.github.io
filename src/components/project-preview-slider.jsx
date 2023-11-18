import Slider from 'react-slick';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projectsData } from 'data';
import { ProjectPreviewCard } from './project-preview-card';

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

export const ProjectPreviewSlider = () => {
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
    <Slider {...settings}>
      {projectsData
        .filter((project) => project.featuredProject)
        .map((project) => (
          <ProjectPreviewCard project={project} />
        ))}
    </Slider>
  );
};
