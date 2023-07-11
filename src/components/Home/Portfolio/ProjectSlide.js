import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import ServiceButton from '../../../assets/customComponents/ServiceButton';

const ProjectSlide = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: '7px',
        overflow: 'hidden',
        transition: 'all 0.5s ease',
        '&:hover': {
          '& h5': {
            color: '#0066ff',
          },
        },
      }}
    >
      <Box sx={{ height: 240, overflow: 'hidden' }}>
        <ImageWrapper
          src={data?.photo}
          alt={data?.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box sx={{ p: '30px' }}>
        <Link href={`portfolio/${data?.slug}`}>
          <Typography
            component="h5"
            sx={{
              fontSize: '20px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {data?.title}
          </Typography>
        </Link>
        <Typography
          component="small"
          sx={{
            fontSize: '10px',
            mt: '5px',
            letterSpacing: '1px',
            color: '#0066ff',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          {data?.serviceCat.join(', ')}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: '13px',
            mt: '15px',
            mb: '20px',
            lineHeight: 2,
            color: '#666',
          }}
        >
          {data?.description}
        </Typography>
        <Box>
          {data?.buttons.map((item) => (
            <ServiceButton key={item}>{item}</ServiceButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSlide;
