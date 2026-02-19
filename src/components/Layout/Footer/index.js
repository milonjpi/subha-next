import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FooterInfo from './FooterInfo';
import LinkItem from './LinkItem';
import NewsLetter from './NewsLetter';
import footerData from '../../../assets/data/footerData';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#000' }}>
      <Container maxWidth="xl">
        <Box sx={{ pt: '90px', pb: '70px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <FooterInfo data={footerData?.info} />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <LinkItem title="Categories" data={footerData?.categories} />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <LinkItem title="Important Link" data={footerData?.links} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
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
              OLIVE & CO.
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
              OLIVE & CO.
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
