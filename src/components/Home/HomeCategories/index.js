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
              image="/images/categories/women.jpg"
            />
            <CategoriesItem
              title="Men"
              height={660}
              image="/images/categories/men.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CategoriesItem
              sx={{ mb: 3 }}
              title="Boys"
              height={660}
              image="/images/categories/boys.jpg"
            />
            <CategoriesItem
              title="Girls"
              height={932}
              image="/images/categories/girls.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <CategoriesItem
              sx={{ mb: 3 }}
              title="Kids"
              height={932}
              image="/images/categories/kids.jpg"
            />
            <CategoriesItem
              title="Accessories"
              height={660}
              image="/images/categories/accessories.jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeCategories;
