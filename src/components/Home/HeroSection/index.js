import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        backgroundImage: 'url(images/bg/hero-bg.png)',
        minHeight: 600,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 600,
        }}
      >
        <Box sx={{ py: 12, textAlign: 'center' }}>
          <Box>
            <Typography
              component="h6"
              sx={{
                fontFamily: 'Open Sans',
                fontSize: '20px',
                display: 'inline-block',
                letterSpacing: '2px',
                color: '#fff',
                padding: '5px 10px',
                textAlign: 'center',
                background: '#2f2f2f',
                textTransform: 'uppercase',
              }}
            >
              TBZ Engineering
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: 55,
                display: 'inline-block',
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.4,
                background: '#937c6f',
                padding: '10px 20px',
                fontFamily: 'Open Sans',
              }}
            >
              Technology &amp; IT Solutions
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
