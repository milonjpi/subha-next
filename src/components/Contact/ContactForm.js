import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ContactButton from '../../assets/customComponents/ContactButton';

const Input = styled(InputBase)`
  border: 1px solid #9994;
  background: #fff;
  background-clip: padding-box;
  color: #212529;
  font-size: 12px;
  padding: 10px 25px;
  border-radius: 30px;
  min-height: 50px;
`;

const ContactForm = () => {
  return (
    <Box sx={{ position: 'relative', zIndex: 5 }}>
      <Typography
        component="p"
        sx={{
          fontSize: 12,
          mb: '30px',
          color: '#dc3545',
          textAlign: 'center',
          linHeight: 1.7,
        }}
      >
        The field is required mark as *
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Name *" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Email Address *" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Phone Number (option)" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Your Website (option)" />
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth placeholder="Your inquiry about *" />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            multiline
            minRows={10}
            placeholder="Write your inquiry here"
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography sx={{ fontSize: 13, color: '#212529' }}>
                By Submitting, i&#39;m agreed to the{' '}
                <Typography
                  component="span"
                  variant="span"
                  sx={{
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      color: '#0066ff',
                    },
                  }}
                >
                  Terms &amp; Conditions
                </Typography>
              </Typography>
            }
            sx={{ color: '#fff' }}
          />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <ContactButton>Send Your Request</ContactButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
