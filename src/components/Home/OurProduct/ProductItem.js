import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const ProductItem = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: '#fff',
        border: '1px solid #9994',
        borderRadius: '5px',
        p: '20px',
        mb: data?.mb,
        '&:hover': {
          borderColor: 'transparent',
          boxShadow: '0px 54px 115px 0px rgba(52, 60, 66, 0.25)',
          '& h2': {
            textDecoration: 'underline',
          },
        },
      }}
    >
      <Box sx={{ mr: '15px' }}>
        <ImageWrapper
          style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
          src={data?.icon}
          alt={data?.title}
        />
      </Box>
      <Box>
        <Link href={data?.path} passHref>
          <Typography
            component="h2"
            sx={{
              fontSize: 16,
              fontWeight: 700,
              mb: '15px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              color: '#0066ff',
              '&:hover': {
                color: '#0066ffa6',
              },
            }}
          >
            {data?.title}
          </Typography>
        </Link>

        <Typography component="p" sx={{ fontSize: 12, color: '#6c757d' }}>
          {data?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductItem;
