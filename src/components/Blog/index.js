import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FilterSection from './FilterSection';
import BlogSection from './BlogSection';

const Blog = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: 'url(images/blog/bg.jpg)',
          minHeight: 220,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: 'center',
              fontFamily: 'Cinzel',
              fontWeight: 500,
              fontSize: 50,
              color: '#fff',
            }}
          >
            Blog
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ pt: 10, pb: 15 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={8.5}>
              <BlogSection />
            </Grid>
            <Grid item xs={12} md={3.5}>
              <FilterSection />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
