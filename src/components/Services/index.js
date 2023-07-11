import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { serviceData } from '../../assets/data';
import PageHeader from '../../assets/preComponents/PageHeader';
import ServiceItem from '../Home/ServiceSection/ServiceItem';

const Services = () => {
  return (
    <Box
      component="section"
      sx={{
        py: '100px',
        background: 'linear-gradient(to top, #0066ff12, #0066ff01)',
      }}
    >
      <Container maxWidth="lg">
        <PageHeader
          titleLeft="Our"
          titleRight="Services"
          subTitle="We provide perfect IT Solutions for your business"
        />
        <Box>
          <Grid container spacing={3}>
            {serviceData.map((item) => (
              <ServiceItem key={item.count} data={item} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
