import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import productData from '../../../assets/data/products';
import ClothCard from './../../ui/ClothCard';

const SingleCloth = ({ data }) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={7}>
              <Grid container spacing={3}>
                <Grid item xs={0} sm={3}>
                  <Box sx={{ height: { xs: 0, md: '100%' } }}>
                    <Image
                      src={data?.image}
                      width={720}
                      height={932}
                      objectFit="cover"
                      alt={data?.name}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Box>
                    <Image
                      src={data?.image}
                      width={720}
                      height={932}
                      objectFit="cover"
                      alt={data?.name}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ pr: { md: 5 } }}>
                <Typography
                  sx={{
                    fontFamily: 'Open Sans',
                    fontSize: 24,
                    lineHeight: 1.5,
                    fontWeight: 500,
                    color: '#333',
                    pb: '14px',
                  }}
                >
                  {data?.name}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                  <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                  <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                  <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                  <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'open Sans',
                    fontSize: 13,
                    color: '#888888',
                    pt: '10px',
                    lineHeight: 1.8,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Totam dolore velit asperiores voluptatibus mollitia est.
                </Typography>
                <Box sx={{ p: 3, mb: 4 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Open Sans',
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: '#666666',
                      fontWeight: 500,
                      pb: 0.5,
                    }}
                  >
                    <span style={{ display: 'inline-block', minWidth: 50 }}>
                      Color:
                    </span>

                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: '#888888',
                      }}
                    >
                      Black, Blue, Grey, Green, Red, White
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'Open Sans',
                      fontSize: 13,
                      lineHeight: 1.8,
                      color: '#666666',
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ display: 'inline-block', minWidth: 50 }}>
                      Size:
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: '#888888',
                      }}
                    >
                      XS, S, M, L, XL, 2XL
                    </span>
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ pt: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: 'Open Sans',
                      color: '#222222',
                      fontSize: 16,
                      lineHeight: 1.5,
                      fontWeight: 500,
                    }}
                  >
                    Description
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'open Sans',
                      fontSize: 13,
                      color: '#888888',
                      pt: '10px',
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam dolore velit asperiores voluptatibus mollitia est.
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                    consectetur.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ pt: 5 }}>
          <Typography
            sx={{
              fontFamily: 'Cinzel',
              fontSize: 30,
              color: '#222222',
              lineHeight: 1.2,
              textAlign: 'center',
              fontWeight: 600,
              pb: 10,
            }}
          >
            Related Products
          </Typography>
          <Grid container spacing={4}>
            {productData.slice(0, 4).map((el) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ mb: 5 }}
                key={el.id}
              >
                <ClothCard data={el} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleCloth;
