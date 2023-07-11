import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from 'next/link';

const HomeCategories = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                mb: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-02.jpg"
                width={720}
                height={932}
                alt="mens"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    Dresses
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-05.jpg"
                width={720}
                height={660}
                alt="women"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    Sunglasses
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                mb: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-03.jpg"
                width={720}
                height={660}
                alt="mens"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    Watches
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-07.jpg"
                width={720}
                height={932}
                alt="women"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    FooterWear
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                mb: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-04.jpg"
                width={720}
                height={932}
                alt="mens"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    Bags
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box
              sx={{
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  '& img': { transform: 'scale(1.1)' },
                },
              }}
            >
              <Image
                src="/images/banner/banner-03.jpg"
                width={720}
                height={660}
                alt="women"
                style={{ transition: 'all 0.6s' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '20px',
                  width: 179,
                }}
              >
                <Link href="#" passHref>
                  <Typography
                    component="a"
                    sx={{
                      backgroundColor: '#fffffff2',
                      width: '100%',
                      height: 46,
                      fontSize: 16,
                      color: '#333333',
                      textTransform: 'uppercase',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.6s',
                      '&:hover': {
                        backgroundColor: '#e65540',
                        color: '#fff',
                      },
                    }}
                  >
                    Watches
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCategories;
