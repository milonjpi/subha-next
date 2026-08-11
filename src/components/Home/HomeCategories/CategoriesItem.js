import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const CategoriesItem = ({ title, height, image, sx = {} }) => {
  return (
    <Box
      sx={{
        ...sx,
        overflow: 'hidden',
        position: 'relative',
        '&:hover': {
          '& img': { transform: 'scale(1.1)' },
        },
      }}
    >
      <Image
        src={image}
        width={720}
        height={height}
        objectFit="cover"
        alt="women"
        style={{ transition: 'all 0.6s' }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '20px',
          width: 179,
        }}
      >
        <Link href="#" passHref>
          <Typography
            component="a"
            sx={{
              backgroundColor: '#fffffff2',
              width: '100%',
              height: 46,
              fontSize: 16,
              color: '#333333',
              textTransform: 'uppercase',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              transition: 'all 0.6s',
              '&:hover': {
                backgroundColor: '#e65540',
                color: '#fff',
              },
            }}
          >
            {title}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default CategoriesItem;
