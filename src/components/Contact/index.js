import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ContactForm from './ContactForm';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';
import PageHeader from '../../assets/preComponents/PageHeader';

const Contact = () => {
  return (
    <Box component="section" sx={{ py: '100px', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <PageHeader
          titleLeft="Get In"
          titleRight="Touch"
          subTitle="We will contact again after receive your request in 24h"
        />
        <Box sx={{ mb: '100px' }}>
          <Typography
            component="h2"
            sx={{
              mt: '30px',
              mb: '50px',
              color: '#157efb',
              textTransform: 'uppercase',
              fontSize: { xs: 25, md: 40 },
              fontWeight: 700,
              lineHeight: { xs: 1.4, md: 1 },
              textAlign: 'center',
              letterSpacing: { xs: 12, md: 20 },
            }}
          >
            TBZ Engineering
          </Typography>
          <Typography
            component="h4"
            sx={{
              mb: '20px',
              color: '#000',
              fontSize: { xs: 18, md: 24 },
              textAlign: 'center',
            }}
          >
            sales@tbz.com.bd
          </Typography>
          <Typography
            component="h4"
            sx={{
              mb: '20px',
              color: '#000',
              fontSize: { xs: 18, md: 24 },
              textAlign: 'center',
            }}
          >
            39 Kazi Bhaban, 6th Floor, New Elephant Road, Dhaka-1205
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'relative',
            borderTop: '10px solid #6640f4',
            borderTopRightRadius: '40px',
            borderTopLeftRadius: '40px',
            py: '100px',
            px: '15px',
            '&:before': {
              position: 'absolute',
              content: "''",
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(45deg, transparent, #def1fa, transparent, #e8e8f3, transparent)',
              backgroundSize: '400% 400%',
              animation: 'gradient 20s linear infinite',
              borderRadius: '30px',
              overflow: 'hidden',
            },
          }}
        >
          <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            <Grid item xs={12} lg={8}>
              <ContactForm />
            </Grid>
          </Grid>
          <ImageWrapper
            src="/images/bg/contact_a.png"
            alt=""
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              borderBottomLeftRadius: '30px',
              pointerEvent: 'none',
              maxWidth: '20%',
            }}
          />
          <ImageWrapper
            src="/images/bg/contact_message.png"
            alt=""
            style={{
              position: 'absolute',
              right: '-150px',
              top: '100px',
              borderBottomLeftRadius: '30px',
              pointerEvent: 'none',
              maxWidth: '30%',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
