import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { postsData } from '../../../assets/data';
import BlogDetailsBody from './BlogDetailsBody';
import BlogDetailsHeader from './BlogDetailsHeader';
import RecentPost from './RecentPost';

const BlogDetails = ({ data }) => {
  const recentPosts = postsData.filter((item) => item.id !== data?.id);
  return (
    <Box component="section" sx={{ pb: '100px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} md={8}>
            <BlogDetailsHeader />
            <BlogDetailsBody data={data} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentPost recentPosts={recentPosts} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDetails;
