import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ data }) => {
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
          <Link href={`/blog/${data?.slug}`} passHref>
            <a>
              <Image
                src={data?.image}
                width={720}
                height={539}
                objectFit="cover"
                alt={data?.name}
              />
            </a>
          </Link>
        </Box>
      </Box>
      <Box sx={{ pt: '14px' }}>
        <Typography component="h4" sx={{ pb: '7px' }}>
          <Link href={`/blog/${data?.slug}`} passHref>
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
          {data?.para1.slice(0, 150) + '...'}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogCard;
