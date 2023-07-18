import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import blogsData from '../../../assets/data/blogsData';
import BlogCard from '../../ui/BlogCard';

const HomeBlog = () => {
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
            {blogsData?.map((el) => (
              <Grid item xs={12} sm={6} md={4} key={el.id}>
                <BlogCard data={el} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBlog;
