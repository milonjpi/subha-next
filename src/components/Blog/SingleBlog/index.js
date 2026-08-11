import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import FilterSection from '../FilterSection';

const SingleBlog = ({ data }) => {
  return (
    <Box component="section">
      <Container maxWidth="xl">
        <Box sx={{ pt: 10, pb: 15 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} md={8.5}>
              <Box>
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    position: 'relative',
                  }}
                >
                  <Image
                    src={data?.image}
                    layout="fill"
                    objectFit="cover"
                    alt={data?.name}
                  />
                </Box>
                <Box sx={{ pt: '14px' }}>
                  <Typography
                    component="h4"
                    sx={{
                      pb: '7px',
                      fontSize: 16,
                      color: '#333333',
                      lineHeight: 1.5,
                      textDecoration: 'none',
                      fontFamily: 'Open Sans',
                    }}
                  >
                    {data?.name}
                  </Typography>

                  <Typography
                    component="p"
                    sx={{ fontSize: 13, lineHeight: 1.8, color: '#555555' }}
                  >
                    <span style={{ color: '#999999' }}>By </span>Nancy Ward
                    <span style={{ color: '#999999' }}> On </span>July 22, 2017
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      pt: '16px',
                      fontSize: 13,
                      fontFamily: 'Open Sans',
                      color: '#888888',
                      lineHeight: '1.8',
                      mb: 3,
                    }}
                  >
                    {data?.para1}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      pt: '16px',
                      fontSize: 13,
                      fontFamily: 'Open Sans',
                      color: '#888888',
                      lineHeight: '1.8',
                    }}
                  >
                    {data?.para1}
                  </Typography>
                </Box>
              </Box>
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

export default SingleBlog;
