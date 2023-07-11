import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ServiceButton from '../../../assets/customComponents/ServiceButton';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import Link from 'next/link';

const ServiceItem = ({ data }) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box
        sx={{
          p: '30px',
          backgroundColor: '#fff',
          border: '1px solid #9993',
          borderRadius: '8px',
          visibility: 'visible',
          animationDelay: '0.6s',
          animationName: 'fadeInUp',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'transparent',
            boxShadow: '0px 54px 115px 0px rgba(52, 60, 66, 0.25)',
            '& a': {
              color: '#0066ff',
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: '35px',
          }}
        >
          <Link href={`/services/${data?.slug}`} passHref>
            <Typography
              component="a"
              sx={{
                fontSize: 22,
                fontWeight: 700,
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
              }}
            >
              {data?.title}
            </Typography>
          </Link>

          <Typography sx={{ fontSize: 12, fontWeight: 500, color: '#0066ff' }}>
            {data?.count}
          </Typography>
        </Box>
        <Box sx={{ mb: '35px' }}>
          <ImageWrapper
            style={{ width: 60, height: 60, objectFit: 'cover' }}
            src={data?.icon}
          />
        </Box>
        <Box>
          <Typography
            component="p"
            sx={{
              mb: '20px',
              fontSize: 13,
              color: '#666',
              lineHeight: 2,
            }}
          >
            {data?.description}
          </Typography>
          <Box>
            {data?.buttons.map((item) => (
              <ServiceButton key={item.title}>{item.title}</ServiceButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ServiceItem;
