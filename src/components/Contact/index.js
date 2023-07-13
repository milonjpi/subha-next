import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ButtonBase from '@mui/material/ButtonBase';
import heading from '../../assets/images/about/heading.jpg';

const Contact = () => {
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
            Contact
          </Typography>
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ pt: 10, pb: 15 }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box sx={{ overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d654.7346245182841!2d90.40660300426556!3d23.72083943735236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1689250323480!5m2!1sen!2sbd"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  pt: '15px',
                  pb: '36px',
                  fontFamily: 'Open Sans',
                  fontSize: 25,
                  color: '#333333',
                  lineHeight: 1.2,
                }}
              >
                Send Us your message
              </Typography>
              <Box>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <InputBase
                      fullWidth
                      placeholder="Full Name"
                      sx={{
                        fontFamily: 'Open Sans',
                        fontSize: 13,
                        color: '#555555',
                        lineHeight: 1.8,
                        px: '22px',
                        py: 1,
                        border: '1px solid #e4e1e1',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBase
                      fullWidth
                      placeholder="Phone Number"
                      sx={{
                        fontFamily: 'Open Sans',
                        fontSize: 13,
                        color: '#555555',
                        lineHeight: 1.8,
                        px: '22px',
                        py: 1,
                        border: '1px solid #e4e1e1',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBase
                      fullWidth
                      placeholder="Email Address"
                      sx={{
                        fontFamily: 'Open Sans',
                        fontSize: 13,
                        color: '#555555',
                        lineHeight: 1.8,
                        px: '22px',
                        py: 1,
                        border: '1px solid #e4e1e1',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputBase
                      fullWidth
                      placeholder="Message"
                      multiline
                      rows={4}
                      sx={{
                        fontFamily: 'Open Sans',
                        fontSize: 13,
                        color: '#555555',
                        lineHeight: 1.8,
                        px: '22px',
                        py: 1,
                        border: '1px solid #e4e1e1',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonBase
                      disableRipple
                      sx={{
                        fontFamily: 'Open Sans',
                        textTransform: 'uppercase',
                        borderRadius: '23px',
                        backgroundColor: '#222222',
                        color: '#fff',
                        lineHeight: 1.8,
                        px: '22px',
                        height: 46,
                        width: 160,
                        fontSize: 16,
                        transition: 'all 0.5s ease',
                        '&:hover': {
                          backgroundColor: '#e65540',
                        },
                      }}
                    >
                      Send
                    </ButtonBase>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
