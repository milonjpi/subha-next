import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import { serviceData } from '../../../assets/data';
import ServiceItem from './ServiceItem';

const ServiceSection = () => {
  return (
    <Box component="section" sx={{ position: 'relative', py: '100px' }}>
      <Container maxWidth="lg">
        <Box>
          <Box sx={{ marginLeft: { xs: 0, md: '8.33%' }, px: 2 }}>
            <Box sx={{ mb: '60px' }}>
              <Typography
                component="h6"
                sx={{
                  fontSize: 13,
                  letterSpacing: 2,
                  mb: '20px',
                  color: '#0066ff',
                  textTransform: 'uppercase',
                }}
              >
                Our Services
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 26, md: 32 }, fontWeight: 700 }}
              >
                TBZ Provides Perfect IT Solutions
                <Typography
                  component="span"
                  variant="span"
                  sx={{ fontWeight: 400, ml: 1 }}
                >
                  For Your Business
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {serviceData.slice(0, 6).map((item) => (
              <ServiceItem key={item.count} data={item} />
            ))}
          </Grid>
        </Box>
      </Container>
      <ImageWrapper
        style={{ position: 'absolute', left: 0, bottom: '30%', zIndex: -999 }}
        src="/images/bg/service_bg_l.png"
        alt=""
      />
      <ImageWrapper
        style={{ position: 'absolute', right: 0, top: '25%', zIndex: -999 }}
        src="/images/bg/service_bg_r.png"
        alt=""
      />
    </Box>
  );
};

export default ServiceSection;
