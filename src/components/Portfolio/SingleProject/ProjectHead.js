import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const ProjectHead = ({ data }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 55,
          color: '#000',
          mb: '50px',
          textAlign: 'center',
        }}
      >
        {data?.title}
      </Typography>
      <Box sx={{ borderBottom: '1px solid #dee2e6' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <AboutCard head="Services" info={data?.serviceCat.join(', ')} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AboutCard head="Date" info={data?.date} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AboutCard head="Technology" info={data?.buttons.join(', ')} />
          </Grid>
          <Grid item xs={12} md={3}>
            <AboutCard head="Team" info={data?.team.join(', ')} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: '70px',
          borderBottom: '1px solid #0002',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
          <Grid item xs={12} md={7}>
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              <ImageWrapper
                src={data?.screenshot[0]}
                alt=""
                style={{
                  position: 'relative',
                  zIndex: 5,
                }}
              />
              <ImageWrapper
                src="/images/bg/single_proj_bubble.png"
                alt=""
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  left: 0,
                  top: 0,
                  width: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  animation: 'rotate-center 100s linear infinite both',
                }}
              />
              <ImageWrapper
                src="/images/bg/single_proj_circle.png"
                alt=""
                style={{
                  position: 'absolute',
                  zIndex: 0,
                  left: 0,
                  top: '15%',
                  height: '70%',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  animation: 'rotate-center 100s linear infinite both reverse',
                }}
              />
            </Box>
            <Box sx={{ mt: '30px', position: 'relative', zIndex: 100 }}>
              <Typography
                component="h5"
                sx={{
                  textAlign: 'center',
                  fontWeight: 500,
                  fontSize: 20,
                }}
              >
                {data?.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectHead;

const AboutCard = ({ head, info }) => {
  return (
    <Box sx={{ p: '15px', mb: '30px' }}>
      <Typography
        component="small"
        sx={{
          fontSize: 11,
          color: '#999',
          mb: '10px',
          textTransform: 'uppercase',
          display: 'block',
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        {head}
      </Typography>
      <Typography
        component="h6"
        sx={{
          color: '#000',
          fontSize: 14,
          fontWeight: 700,
          lineHeight: 1.6,
          textAlign: 'center',
        }}
      >
        {info}
      </Typography>
    </Box>
  );
};
