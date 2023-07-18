import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';

const ClothSideCard = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'start', mb: 2 }}>
      <Link href={`/blog/${data?.slug}`} passHref>
        <a>
          <Box
            sx={{
              opacity: 1,
              width: 80,
              height: 103,
              position: 'relative',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <Image src={data?.image} layout="fill" alt={data?.name} />
          </Box>
        </a>
      </Link>

      <Box
        sx={{
          padding: '10px 15px',
        }}
      >
        <Link href={`/clothes/${data?.slug}`} passHref>
          <Typography
            component="a"
            sx={{
              textDecoration: 'none',
              color: '#555555',
              fontFamily: 'Open Sans',
              fontSize: { xs: 15, md: 14, lg: 15 },
              lineHeight: 1.2,
            }}
          >
            {data?.name}
          </Typography>
        </Link>

        <Box
          sx={{
            pt: 0.8,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <StarIcon sx={{ fontSize: 16, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 16, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 16, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 16, color: '#FBBA42' }} />
          <StarIcon sx={{ fontSize: 16, color: '#FBBA42' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ClothSideCard;
