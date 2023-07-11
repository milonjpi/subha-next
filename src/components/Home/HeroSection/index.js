import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BlackButton from '../../../assets/customComponents/BlackButton';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: '100px',
        backgroundImage: 'url(images/bg/hero-bg.png)',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Container maxWidth="lg">
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
      <ImageWrapper
        style={{
          position: 'absolute',
          right: 0,
          top: '8%',
          width: '55%',
          objectFit: 'cover',
          objectPosition: 'right',
          zIndex: -999,
        }}
        src="/images/bg/hero_right.png"
        alt=""
      />
      <ImageWrapper
        style={{
          position: 'absolute',
          left: 0,
          top: '25%',
          height: '40%',
          objectFit: 'cover',
          objectPosition: 'left',
          zIndex: -999,
        }}
        src="/images/bg/hero_left.png"
        alt=""
      />
    </Box>
  );
};

export default HeroSection;
