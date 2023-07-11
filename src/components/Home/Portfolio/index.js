import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { projectData } from '../../../assets/data';
import ProjectSlide from './ProjectSlide';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import PortfolioSlideButton from '../../../assets/customComponents/PortfolioSlideButton';

const Portfolio = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: '100px',
        background: '#eef4f8',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 999, position: 'relative' }}>
        <Box>
          <Box sx={{ ml: { xs: 0, md: '8.33%' }, mb: '60px' }}>
            <Typography
              component="h6"
              sx={{
                fontSize: 13,
                letterSpacing: 2,
                mb: '20px',
                color: '#0066ff',
                textTransform: 'uppercase',
              }}
            >
              Portfolio
            </Typography>
            <Typography
              component="h6"
              sx={{
                fontSize: { xs: 28, md: 32 },
                fontWeight: 700,
              }}
            >
              {'Latest Projects '}
              <Typography
                component="span"
                variant="span"
                sx={{ fontWeight: 400, display: { xs: 'block', sm: 'inline' } }}
              >
                From Our Team
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            className="portfolio-slider"
            sx={{ position: 'relative', pb: '60px' }}
          >
            <Swiper
              slidesPerView={md ? 1 : lg ? 2 : 3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                el: '.portfolio-slider .swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '"></span>';
                },
              }}
              navigation={{
                nextEl: '.portfolio-slider .swiper-button-next',
                prevEl: '.portfolio-slider .swiper-button-prev',
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {projectData.slice(0, 4).map((item) => (
                <SwiperSlide key={item.id}>
                  <ProjectSlide data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal" />
            <PortfolioSlideButton
              className="swiper-button-prev"
              sx={{
                left: '-70px !important',
              }}
            />
            <PortfolioSlideButton
              sx={{
                right: '-70px !important',
              }}
              className="swiper-button-next"
            />
          </Box>
        </Box>
      </Container>
      <ImageWrapper
        src="/images/bg/port_bg_left.png"
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          bottom: '20px',
          width: '40%',
          opacity: 1,
          PointerEvent: 'none',
        }}
      />
      <ImageWrapper
        src="/images/bg/port_bg_right.png"
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          top: '30px',
          width: '30%',
          opacity: 0.3,
          PointerEvent: 'none',
        }}
      />
    </Box>
  );
};

export default Portfolio;
