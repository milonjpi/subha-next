import Box from '@mui/material/Box';
import BlogDetails from './BlogDetails';
import BlogImage from './BlogImage';
import SingleBlogHead from './SingleBlogHead';

const SingleBlog = ({ data }) => {
  return (
    <Box component="main">
      <SingleBlogHead data={data} />
      <BlogImage data={data} />
      <BlogDetails data={data} />
    </Box>
  );
};

export default SingleBlog;
