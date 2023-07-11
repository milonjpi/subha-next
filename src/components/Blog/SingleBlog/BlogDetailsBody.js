import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const BlogDetailsBody = ({ data }) => {
  return (
    <Box>
      <Typography
        component="h4"
        sx={{
          color: '#000',
          fontWeight: 700,
          lineHeight: 1.6,
          mb: '30px',
          fontSize: { xs: 18, md: 24 },
        }}
      >
        {data?.description?.head}
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#666',
          lineHeight: 2,
          mb: '50px',
          fontSize: 14,
        }}
      >
        {data?.description?.body}
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 300, overflow: 'hidden', borderRadius: '20px' }}>
            <ImageWrapper
              src={data?.extraPhoto?.first}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ height: 300, overflow: 'hidden', borderRadius: '20px' }}>
            <ImageWrapper
              src={data?.extraPhoto?.second}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Typography
        component="p"
        sx={{
          color: '#666',
          lineHeight: 2,
          mt: '50px',
          fontSize: 14,
        }}
      >
        {data?.description?.foot}
      </Typography>
    </Box>
  );
};

export default BlogDetailsBody;
