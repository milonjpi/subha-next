import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const HomeBlogItem = ({ data }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            overflow: 'hidden',
            '& img': {
              transition: 'all 0.5s ease',
              cursor: 'pointer',
              '&:hover': { transform: 'scale(1.1)' },
            },
          }}
        >
          <Link href="#" passHref>
            <a>
              <Image
                src={data?.image}
                width={720}
                height={539}
                objectFit="cover"
                alt="featured1"
              />
            </a>
          </Link>
        </Box>
      </Box>
      <Box sx={{ pt: '14px' }}>
        <Typography component="h4" sx={{ pb: '7px' }}>
          <Link href="#" passHref>
            <Typography
              component="a"
              sx={{
                fontSize: 16,
                color: '#333333',
                lineHeight: 1.5,
                textDecoration: 'none',
                fontFamily: 'Open Sans',
                transition: 'all 0.4s ease',
                '&:hover': {
                  color: '#e65540',
                },
              }}
            >
              {data?.name}
            </Typography>
          </Link>
        </Typography>
        <Typography
          component="p"
          sx={{ fontSize: 13, lineHeight: 1.8, color: '#555555' }}
        >
          <span style={{ color: '#999999' }}>By </span>Nancy Ward
          <span style={{ color: '#999999' }}> On </span>July 22, 2017
        </Typography>
        <Typography
          component="p"
          sx={{
            pt: '16px',
            fontSize: 13,
            fontFamily: 'Open Sans',
            color: '#888888',
            lineHeight: '1.8',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et esse
          debitis voluptatum tenetur quod placeat. laudantium.
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeBlogItem;
