import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';

const RecentPost = ({ recentPosts }) => {
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
        Recent Post
      </Typography>
      {recentPosts.map((item) => (
        <PostItem
          key={item.id}
          sn={sn++}
          length={recentPosts.length}
          data={item}
        />
      ))}
    </Box>
  );
};

export default RecentPost;

const PostItem = ({ sn, length, data }) => {
  return (
    <Link href={data?.slug} passHref>
      <Typography
        component="a"
        sx={{
          display: 'flex',
          pb: '32px',
          mb: '32px',
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
            width: '30%',
            borderRadius: '10px',
            overflow: 'hidden',
            flexShrink: 0,
            mr: '16px',
          }}
        >
          <ImageWrapper
            src={data?.photo}
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
            {data?.title}
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
            {data?.description?.head.slice(0, 60)}
            {' [...]'}
          </Typography>
        </Box>
      </Typography>
    </Link>
  );
};
