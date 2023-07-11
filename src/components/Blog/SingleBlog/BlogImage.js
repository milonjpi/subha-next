import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const BlogImage = ({ data }) => {
  return (
    <Box component="section" sx={{ pb: '100px' }}>
      <Container maxWidth="lg">
        <Box sx={{ height: 500, overflow: 'hidden', borderRadius: 5 }}>
          <ImageWrapper
            src={data?.photo}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default BlogImage;
