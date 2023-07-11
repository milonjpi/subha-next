import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';

const AboutHeader = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        pb: '150px',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} lg={8}>
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 30, md: 55 },
                  color: '#000',
                  lineHeight: 1.2,
                  letterSpacing: '-2px',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                {'We provide perfect '} <br />{' '}
                {' IT Solutions & Technology for any'}
                <Typography
                  component="span"
                  variant="span"
                  sx={{
                    position: 'relative',
                    ml: '8px',
                    display: 'inline-block',
                  }}
                >
                  {'Startups'}
                  <ImageWrapper
                    src="/images/bg/head_line.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: '-5px',
                      width: '100%',
                    }}
                  />
                  <ImageWrapper
                    src="/images/bg/head_pen.png"
                    alt=""
                    style={{
                      position: 'absolute',
                      left: '102%',
                      bottom: '-5px',
                    }}
                  />
                </Typography>
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: '30px',
                  color: '#666',
                  fontSize: 15,
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
              >
                {
                  'TBZ helps you unify your brand identity by collecting, storing and distributing'
                }
                <br />
                {'design tokens and assets - automatically.'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ImageWrapper
        src="/images/bg/hand_megaphone.png"
        alt=""
        style={{
          position: 'absolute',
          width: '12%',
          top: '12%',
          left: 0,
          objectFit: 'contain',
          objectPosition: 'left',
          zIndex: -2,

          animation: 'slide_up_down 1.7s ease-in-out infinite alternate both',
        }}
      />
      <ImageWrapper
        src="/images/bg/head_rating.png"
        alt=""
        style={{
          position: 'absolute',
          width: '12%',
          top: '55%',
          left: '19%',
          objectFit: 'contain',
          zIndex: -2,
          animation: 'RL_smooth 1s ease-in-out infinite alternate both',
        }}
      />
      <ImageWrapper
        src="/images/bg/head_linechart.png"
        alt=""
        style={{
          position: 'absolute',
          width: '10%',
          top: '6%',
          right: '12%',
          objectFit: 'contain',
          zIndex: -2,
          animation: 'RL_smooth 1s ease-in-out infinite alternate both',
        }}
      />
      <ImageWrapper
        src="/images/bg/rocket.png"
        alt=""
        style={{
          position: 'absolute',
          width: '14%',
          top: '45%',
          right: '-14px',
          zIndex: -2,
        }}
      />
    </Box>
  );
};

export default AboutHeader;
