import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InfoSection from './InfoSection';
import FormSection from './FormSection';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const ContactSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: '100px',
        backgroundImage: 'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ zIndex: 10, position: 'relative' }}>
        <Box sx={{ mb: '60px' }}>
          <Typography
            component="h6"
            sx={{
              fontSize: 13,
              letterSpacing: 2,
              mb: '20px',
              color: '#fff',
              textTransform: 'uppercase',
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Contact Us
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 25, md: 32 },
              color: '#fff',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {'Request Free '}
            <Typography
              component="span"
              variant="span"
              sx={{ fontWeight: 400 }}
            >
              Consultancy
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <InfoSection />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormSection />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <ImageWrapper
        src="/images/bg/contact_globe.svg"
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          top: '-10%',
          width: '47%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'right',
          maxHeight: 'none',
          filter:
            'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)',
          opacity: 0.3,
          animation: 'rotate-center 100s linear infinite both',
        }}
      />
    </Box>
  );
};

export default ContactSection;
