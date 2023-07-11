import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import { productList } from '../../../assets/data';
import ProductItem from './ProductItem';

const OurProduct = () => {
  return (
    <Box component="section" sx={{ position: 'relative', py: '100px' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: '60px' }}>
          <Typography
            component="h6"
            sx={{
              fontSize: 13,
              letterSpacing: 2,
              mb: '20px',
              color: '#0066ff',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Our Products
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 25, md: 32 },
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {'You Will '}
            <Typography
              component="span"
              variant="component"
              sx={{ fontWeight: 400 }}
            >
              Get To Us
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  height: '400px',
                  minHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                  p: 2,
                  '&:before': {
                    position: 'absolute',
                    content: "''",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    background: 'linear-gradient(to top, #0066ff07, #0066ff01)',
                  },
                }}
              >
                <ImageWrapper
                  src="/images/products/products.png"
                  alt="products"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  minHeight: '100%',
                }}
              >
                {productList.map((item) => (
                  <ProductItem key={item.id} data={item} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ImageWrapper
        src="/images/bg/product_bg.png"
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          bottom: '0',
          width: '100%',
          maxHeight: 'none',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default OurProduct;
