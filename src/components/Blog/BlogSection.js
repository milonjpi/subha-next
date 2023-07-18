import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import blogsData from '../../assets/data/blogsData';
import BlogPageCard from '../ui/BlogPageCard';

const BlogSection = () => {
  return (
    <Box>
      <Grid container spacing={10}>
        {blogsData?.map((el) => (
          <Grid item xs={12} key={el.id}>
            <BlogPageCard data={el} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSection;
