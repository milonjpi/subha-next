import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import ServiceButton from '../../../assets/customComponents/ServiceButton';
import { serviceData } from '../../../assets/data';
import OtherServices from './OtherServices';

const SingleService = ({ data }) => {
  const otherServices = serviceData.filter(
    (item) => item.count !== data?.count
  );
  return (
    <Box component="main">
      <Box component="section" sx={{ py: '50px' }}>
        <Container maxWIdth="lg">
          <Box>
            <Typography
              component="h2"
              sx={{
                fontSize: 45,
                color: '#000',
                mb: '10px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              {data?.title}
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              {data?.buttons?.map((item) => (
                <ServiceButton key={item.title}>{item.title}</ServiceButton>
              ))}
            </Box>
          </Box>
          <Box sx={{ pt: '100px' }}>
            <Typography
              component="h4"
              sx={{
                pb: '30px',
                color: '#000',
                fontWeight: 700,
                fontSize: 25,
              }}
            >
              {data?.description}
            </Typography>
            <Grid container spacing={10}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: 2,
                    '&:before': {
                      position: 'absolute',
                      content: "''",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: '100%',
                      height: '100%',
                      borderRadius: '10px',
                      background:
                        'linear-gradient(to top, #0066ff28, #0066ff12)',
                    },
                  }}
                >
                  <ImageWrapper
                    src={data?.icon}
                    alt=""
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
                <Typography
                  component="p"
                  sx={{ pt: '30px', color: '#666', fontSize: 14 }}
                >
                  {data?.brief}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <OtherServices otherServices={otherServices} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SingleService;
