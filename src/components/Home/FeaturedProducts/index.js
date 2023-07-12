import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FeaturedItem from './FeaturedItem';
import Link from 'next/link';

const FeaturedProducts = () => {
  const featuredProduct = [
    {
      id: 1,
      name: 'Cotton Love',
      image: '/images/banner/banner-02.jpg',
    },
    {
      id: 2,
      name: 'Brandy Cost',
      image: '/images/banner/banner-04.jpg',
    },
    {
      id: 3,
      name: 'Freaky Design',
      image: '/images/banner/banner-07.jpg',
    },
    {
      id: 4,
      name: 'Cotton Love',
      image: '/images/banner/banner-02.jpg',
    },
    {
      id: 5,
      name: 'Fabric Summit',
      image: '/images/banner/banner-04.jpg',
    },
    {
      id: 6,
      name: 'Right Choice',
      image: '/images/banner/banner-07.jpg',
    },
    {
      id: 7,
      name: 'Higher Design',
      image: '/images/banner/banner-02.jpg',
    },
    {
      id: 8,
      name: 'Cotton Love',
      image: '/images/banner/banner-04.jpg',
    },
  ];
  return (
    <Box sx={{ py: 5, mb: 7 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: 70,
            fontFamily: 'Cinzel',
            fontWeight: 600,
            lineHeight: 1.2,
            mb: 5,
            color: '#140c40',
            marginTop: 0,
            fontStyle: 'normal',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: 50 }}>Featured</span>
          <br />
          products
        </Typography>
        <Box>
          <Grid container spacing={4}>
            {featuredProduct.map((el) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ mb: 5 }}
                key={el.id}
              >
                <FeaturedItem data={el} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center' }}>
            <Link href="#" passHref>
              <ButtonBase
                component="a"
                sx={{
                  backgroundColor: '#e6e6e6',
                  color: '#222',
                  minWidth: 179,
                  height: 46,
                  fontSize: 16,
                  borderRadius: '23px',
                  transition: 'all 0.5s ease',
                  '&:hover': {
                    backgroundColor: '#111',
                    color: '#fff',
                  },
                }}
              >
                Browse More
              </ButtonBase>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
