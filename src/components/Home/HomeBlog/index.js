import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from 'next/link';
import HomeBlogItem from './HomeBlogItem';

const HomeBlog = () => {
  const featuredProduct = [
    {
      id: 1,
      name: 'Black Friday Guide: Best Sales & Discount Codes',
      image: '/images/banner/banner-02.jpg',
    },
    {
      id: 2,
      name: 'The White Sneakers Nearly Every Fashion Girls Own',
      image: '/images/banner/banner-04.jpg',
    },
    {
      id: 3,
      name: 'New York SS 2018 Street Style: Annina Mislin',
      image: '/images/banner/banner-07.jpg',
    },
  ];
  return (
    <Box sx={{ py: 5, my: 5 }}>
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
          Our Blog
        </Typography>
        <Box>
          <Grid container spacing={4}>
            {featuredProduct.map((el) => (
              <Grid item xs={12} sm={6} md={4} key={el.id}>
                <HomeBlogItem data={el} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBlog;
