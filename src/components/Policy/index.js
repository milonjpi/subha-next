import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Policy = () => {
  return (
    <Box component="section" sx={{ py: '100px' }}>
      <Container maxWidth="lg">
        <Box>
          <Typography
            component="h2"
            sx={{
              mb: '20px',
              fontSize: { xs: 30, md: 45 },
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            {'Privacy '}
            <Typography
              component="span"
              variant="span"
              sx={{
                color: '#157efb',
                position: 'relative',
                display: 'inline-block',
                px: '5px',
                mx: '5px',
                '&:after': {
                  position: 'absolute',
                  content: "''",
                  left: 0,
                  bottom: 0,
                  width: '100%',
                  height: '40%',
                  backgroundColor: '#157efb',
                  opacity: '8%',
                },
              }}
            >
              Policy
            </Typography>
          </Typography>
          <Typography
            component="p"
            sx={{
              color: '#666',
              fontSize: 15,
              lineHeight: 1.7,
              textAlign: 'center',
            }}
          >
            {
              "TBZ Engineering ('us', 'we', or 'our') operates the website (the 'Service'). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for TBZ Engineering is created with the help of the Free Privacy Policy Generator. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://tbz.com.bd"
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Policy;
