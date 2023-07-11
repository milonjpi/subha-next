import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import BlogSlide from './BlogSlide';
import { postsData } from '../../../assets/data';
import PostSlideButton from '../../../assets/customComponents/PostSlideButton';

const BlogSection = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const md = useMediaQuery(theme.breakpoints.down('md'));
  const lg = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <Box
      component="section"
      sx={{
        py: '100px',
        background: '#eef4f8',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
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
              Our Press
            </Typography>
            <Typography
              component="h6"
              sx={{
                fontSize: { xs: 28, md: 32 },
                fontWeight: 700,
              }}
            >
              {'Latest Posts '}
              <Typography
                component="span"
                variant="span"
                sx={{ fontWeight: 400, display: { xs: 'block', sm: 'inline' } }}
              >
                From Our Press
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            className="blog-slider"
            sx={{ position: 'relative', pb: '60px' }}
          >
            <Swiper
              slidesPerView={sm ? 1 : md ? 2 : lg ? 3 : 4}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.blog-slider .swiper-button-next',
                prevEl: '.blog-slider .swiper-button-prev',
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {postsData.map((item) => (
                <SwiperSlide key={item.id}>
                  <BlogSlide data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <PostSlideButton
              className="swiper-button-prev"
              sx={{
                right: '160px !important',
                left: 'auto !important',
                top: '-63px !important',
              }}
            />
            <PostSlideButton
              sx={{
                right: '120px !important',
                top: '-63px !important',
              }}
              className="swiper-button-next"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
