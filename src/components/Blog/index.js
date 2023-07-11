import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ContactButton from '../../assets/customComponents/ContactButton';
import CustomButton from '../../assets/customComponents/CustomButton';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';
import { postsData } from '../../assets/data';
import PageHeader from '../../assets/preComponents/PageHeader';
import BlogSlide from '../Home/BlogSection/BlogSlide';

const Blog = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          py: '100px',
          background: 'linear-gradient(to top, #0066ff12, #0066ff01)',
        }}
      >
        <Container maxWidth="lg">
          <PageHeader
            titleLeft="Our"
            titleRight="Journal"
            subTitle="Get the latest articles from our journal, writing, discuss and share"
            mb="60px"
          />
          <Box>
            <Grid container spacing={3}>
              {postsData.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <BlogSlide data={item} />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center', mt: '60px' }}>
                  <ContactButton disabled style={{ opacity: 0.5 }}>
                    Show More
                  </ContactButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{ position: 'relative', overflow: 'hidden', py: '100px' }}
      >
        <Container>
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} lg={9}>
              <Box>
                <Box>
                  <Typography
                    component="h2"
                    sx={{
                      mb: '20px',
                      fontSize: { xs: 28, md: 50 },
                      fontWeight: 700,
                      letterSpacing: { xs: 3, md: 1 },
                      textAlign: 'center',
                    }}
                  >
                    {
                      'Explore your business potentials today & find opportunity for '
                    }
                    <br />
                    <Typography
                      component="span"
                      variant="span"
                      sx={{ position: 'relative' }}
                    >
                      larger success
                      <ImageWrapper
                        src="/images/bg/head_line.png"
                        alt=""
                        style={{
                          position: 'absolute',
                          left: 0,
                          bottom: '-5px',
                          width: '100%',
                        }}
                      />
                      <ImageWrapper
                        src="/images/bg/head_pen.png"
                        alt=""
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          right: 'auto',
                          left: '102%',
                          transform: 'rotateY(0)',
                        }}
                      />
                    </Typography>
                  </Typography>
                  <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Link href="/services" passHref>
                      <Typography component="a">
                        <CustomButton style={{ padding: '15px 30px' }}>
                          Our Services
                        </CustomButton>
                      </Typography>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <ImageWrapper
          src="/images/bg/contact_globe.svg"
          alt=""
          style={{
            position: 'absolute',
            height: '150%',
            maxHeight: 'none',
            width: '60%',
            top: '-25%',
            left: '20%',
            opacity: 0.15,
            pointerEvents: 'none',
            animation: 'rotate-center 100s linear infinite both',
          }}
        />
      </Box>
    </>
  );
};

export default Blog;
