import styled from '@emotion/styled';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import BlackButton from '../../../assets/customComponents/BlackButton';

const Input = styled(InputBase)`
  background: #fff;
  color: #212529;
  font-size: 13px;
  padding: 0.375rem 0.75rem;
  border-radius: 5px;
  min-height: 50px;
`;

const FormSection = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Your Name *" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input fullWidth placeholder="Email Address *" />
        </Grid>
        <Grid item xs={12}>
          <Input fullWidth placeholder="Your inquiry about *" />
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            placeholder="Write your inquiry here"
            multiline
            minRows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox sx={{ color: '#fff' }} />}
            label={
              <Typography sx={{ fontSize: 13, color: '#fff' }}>
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
        <Grid item xs={12}>
          <BlackButton>Request Now</BlackButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormSection;
