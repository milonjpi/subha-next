import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const ClothCard = ({ data }) => {
  return (
    <Box
      sx={{
        '& .featuredLink': {
          fontWeight: 600,
          fontSize: 20,
          fontFamily: 'Open Sans',
          color: 'inherit',
          textDecoration: 'none',
        },
        '&:hover': {
          '& .featuredContent': {
            borderColor: 'transparent',
            boxShadow: '0 0 10px 3px rgba(0,0,0,0.05)',
          },
          '& .featuredLink': {
            textDecoration: 'underline',
          },
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Link href={`/clothes/${data?.slug}`} passHref>
          <a>
            <Image
              src={data?.image}
              width={720}
              height={800}
              objectFit="cover"
              alt="featured1"
            />
          </a>
        </Link>

        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            opacity: 1,
            cursor: 'pointer',
          }}
        >
          <LocalMallOutlinedIcon
            sx={{
              background: '#fff',
              p: 1,
              borderRadius: '50%',
              fontSize: 40,
            }}
          />
        </Box>
      </Box>
      <Box
        className="featuredContent"
        sx={{
          border: '1px solid #f6f8fe',
          padding: '31px 0',
          mt: -1,
          transition: 'all 0.3s ease',
        }}
      >
        <Typography component="h3" sx={{ textAlign: 'center', mb: '10px' }}>
          <Link href={`/clothes/${data?.slug}`} passHref>
            <Typography component="a" className="featuredLink">
              {data?.name}
            </Typography>
          </Link>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 22, color: '#FBBA42' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ClothCard;
