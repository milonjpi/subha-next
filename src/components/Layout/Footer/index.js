import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import { footerData } from '../../../assets/data';
import FooterInfo from './FooterInfo';
import LinkItem from './LinkItem';
import NewsLetter from './NewsLetter';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: '#000', position: 'relative' }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ pt: '90px', pb: '70px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={5}>
              <FooterInfo data={footerData?.info} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <LinkItem title="Importants Link" data={footerData?.services} />
            </Grid>
            <Grid item xs={12} lg={4}>
              <NewsLetter />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            py: '30px',
            borderTop: '1px solid #fff3',
          }}
        >
          <Typography
            component="p"
            sx={{ fontSize: 13, color: '#aaa7a7', textAlign: 'center' }}
          >
            &copy; {new Date().getFullYear() + ' Copyrights by '}
            <Typography
              component="a"
              sx={{
                fontSize: 13,
                color: '#aaa7a7',
                cursor: 'pointer',
                textDecoration: 'underline',
                '&:hover': {
                  color: '#0066ff',
                },
              }}
            >
              TBZ Engineering.
            </Typography>
            {' All Rights Reserved by '}
            <Typography
              component="a"
              sx={{
                fontSize: 13,
                color: '#aaa7a7',
                cursor: 'pointer',
                textDecoration: 'underline',
                '&:hover': {
                  color: '#0066ff',
                },
              }}
            >
              TBZ Engineering
            </Typography>
          </Typography>
        </Box>
      </Container>
      <ImageWrapper
        src="/images/bg/foot_l.png"
        alt=""
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          pointerEvents: 'none',
        }}
      />
      <ImageWrapper
        src="/images/bg/foot_r.png"
        alt=""
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};

export default Footer;
