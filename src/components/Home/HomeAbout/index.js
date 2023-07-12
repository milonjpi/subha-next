import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const HomeAbout = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: 'url(images/bg/aboutSection.png)',
        minHeight: 550,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          component="h2"
          sx={{
            color: '#fff',
            fontSize: 70,
            mb: '21px',
            lineHeight: 1.2,
            fontFamily: 'Cinzel',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          collection houses
          <br />
          our first-ever
        </Typography>
        <Link href="#" passHref>
          <ButtonBase
            component="a"
            sx={{
              backgroundColor: '#8c6ae4',
              color: '#fff',
              minWidth: 179,
              height: 52,
              fontSize: 18,
              fontWeight: 500,
              fontFamily: 'Open Sans',
              transition: 'all 0.5s ease',
              '&:hover': {
                backgroundColor: '#111',
                color: '#fff',
              },
            }}
          >
            About Us
          </ButtonBase>
        </Link>
      </Box>
    </Box>
  );
};

export default HomeAbout;
