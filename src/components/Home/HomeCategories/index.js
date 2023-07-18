import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CategoriesItem from './CategoriesItem';

const HomeCategories = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <CategoriesItem
              sx={{ mb: 3 }}
              title="Women"
              height={932}
              image="/images/banner/banner-02.jpg"
            />
            <CategoriesItem
              title="Men"
              height={660}
              image="/images/banner/banner-05.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CategoriesItem
              sx={{ mb: 3 }}
              title="Boys"
              height={660}
              image="/images/banner/banner-03.jpg"
            />
            <CategoriesItem
              title="Girls"
              height={932}
              image="/images/banner/banner-07.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CategoriesItem
              sx={{ mb: 3 }}
              title="Kids"
              height={932}
              image="/images/banner/banner-04.jpg"
            />
            <CategoriesItem
              title="Accessories"
              height={660}
              image="/images/banner/banner-03.jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCategories;
