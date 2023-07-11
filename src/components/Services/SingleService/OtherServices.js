import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const OtherServices = ({ otherServices }) => {
  let sn = 1;
  return (
    <Box>
      <Typography
        component="h6"
        sx={{
          fontSize: 16,
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          mb: '20px',
        }}
      >
        Other Services
      </Typography>
      {otherServices.map((item) => (
        <ServiceItem
          key={item.count}
          sn={sn++}
          data={item}
          length={otherServices.length}
        />
      ))}
    </Box>
  );
};

export default OtherServices;

const ServiceItem = ({ sn, data, length }) => {
  return (
    <Link href={data?.slug} passHref>
      <Typography
        component="a"
        sx={{
          display: 'flex',
          pb: '16px',
          mb: '16px',
          textDecoration: 'none',
          borderBottom: length !== sn && '1px solid #0002',
          '&:hover': {
            '& h6': {
              color: '#0066ff',
            },
          },
        }}
      >
        <Box
          sx={{
            height: '60px',
            width: '60px',
            borderRadius: '10px',
            overflow: 'hidden',
            flexShrink: 0,
            mr: '16px',
            p: 1,
            background: 'linear-gradient(to top, #0066ff28, #0066ff12)',
          }}
        >
          <ImageWrapper
            src={data.icon}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
        <Box>
          <Typography
            component="h6"
            sx={{
              color: '#000',
              fontSize: 13,
              fontWeight: 700,
              mb: '5px',
              transition: 'all 0.3s ease',
            }}
          >
            {data.title}
          </Typography>

          <Typography
            component="p"
            sx={{
              color: '#666',
              fontSize: 10,
              lineHeight: 1.7,
              fontWeight: 700,
              mb: '5px',
            }}
          >
            {data?.description.slice(0, 70)}
            {' [...]'}
          </Typography>
        </Box>
      </Typography>
    </Link>
  );
};
