import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import heading from '../../assets/images/about/heading.jpg';

const Policy = () => {
  return (
    <Box component="section">
      <Box
        sx={{
          backgroundImage: `url(${heading.src})`,
          minHeight: 250,
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
            Privacy Policy
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 15 }}></Box>
      </Container>
    </Box>
  );
};

export default Policy;
