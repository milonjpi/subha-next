import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const TBZMissionVision = () => {
  return (
    <Box sx={{ pt: '100px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 10 }}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                component="h5"
                sx={{
                  mb: '10px',
                  fontSize: { xs: 17, md: 25 },
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                TBZ
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
                  Mission
                </Typography>
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: 14, color: '#777', lineHeight: 2 }}
              >
                Exceed clients expectations by going beyond software to provide
                best Web solutions that transform data into knowledge, enabling
                them to solve their problems.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                component="h5"
                sx={{
                  mb: '10px',
                  fontSize: { xs: 17, md: 25 },
                  fontWeight: 700,
                  lineHeight: 1.4,
                }}
              >
                TBZ
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
                  Vision
                </Typography>
              </Typography>
              <Typography
                component="p"
                sx={{
                  fontSize: 14,
                  color: '#777',
                  lineHeight: 2,
                  mb: '15px',
                }}
              >
                Our Vision is to be a leading Web Solution company in IT sector
                and progress in our current position in market. We know that
                Customers growth is our growth, so we commit our customers to
                help in achieving their business goals.
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: 14, color: '#777', lineHeight: 2 }}
              >
                We believe in work with the accuracy and best quality. We want
                to be known as the reliable, innovative and user friendly
                software service provider in IT industry.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TBZMissionVision;
