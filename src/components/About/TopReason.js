import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../assets/customComponents/ImageWrapper';
import PageHeader from '../../assets/preComponents/PageHeader';

const reasons = [
  {
    id: 1,
    title: 'Latest IT Solutions',
    icon: '/images/about/reason_1.png',
    bd: true,
  },
  {
    id: 2,
    title: 'Affordable Price',
    icon: '/images/about/reason_2.png',
    bd: true,
  },
  {
    id: 3,
    title: 'Dedicated Support',
    icon: '/images/about/reason_3.png',
    bd: false,
  },
];

const TopReason = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        titleLeft="Top"
        titleRight="Reasons"
        subTitle="Why Choose TBZ Engineering for your whole IT Solutions"
        mb="40px"
      />

      <Box
        sx={{
          border: '1px solid #9993',
          py: '20px',
          display: 'flex',
          borderRadius: { xs: '20px', md: '50rem' },
        }}
      >
        <Grid container spacing={2}>
          {reasons.map((item) => (
            <ReasonItem key={item.id} data={item} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TopReason;

const ReasonItem = ({ data }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', md: 'center' },
          alignItems: 'center',
          borderRight: { md: data?.bd ? '1px solid #9993' : 0 },
          py: { xs: '20px', md: '10px' },
          pl: { xs: '30px', md: 0 },
        }}
      >
        <Box sx={{ flexShrink: 0, mr: '25px' }}>
          <ImageWrapper
            src={data.icon}
            alt=""
            style={{
              filter: 'drop-shadow(-10px 10px 20px #084cba77)',
              animation: 'scale_up_down 1s ease-in-out infinite alternate both',
            }}
          />
        </Box>
        <Box>
          <Typography
            component="h5"
            sx={{
              fontSize: '20px',
              color: '#000',
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            {data.title}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
