import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import productData from '../../../assets/data/products';
import ClothCard from '../../ui/ClothCard';

const ClothProduct = () => {
  return (
    <Box>
      <Typography
        sx={{
          lineHeight: 1.8,
          pb: '35px',
          fontFamily: 'Open Sans',
          fontSize: 13,
          color: '#888888',
          textAlign: 'right',
        }}
      >
        Showing 1&#45;{productData?.length} of {productData?.length} results
      </Typography>
      <Grid container spacing={4}>
        {productData.map((el) => (
          <Grid item xs={12} sm={6} md={4} sx={{ mb: 5 }} key={el.id}>
            <ClothCard data={el} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClothProduct;
