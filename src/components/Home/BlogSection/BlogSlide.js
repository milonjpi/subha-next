import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ImageWrapper from '../../../assets/customComponents/ImageWrapper';
import PostImg from '../../../assets/customComponents/PostImg';
import Link from 'next/link';

const BlogSlide = ({ data }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '10px',
        overflow: 'hidden',
        '&:hover': {
          '& .postInfo': {
            display: 'block',
          },
          '& h6': {
            borderBottom: '2px solid #eef4f8',
          },
          '& .postImage': {
            transform: 'scale(1.3) rotate(-10deg)',
          },
        },
      }}
    >
      <Box sx={{ position: 'absolute', top: '20px', left: '20px', zIndex: 10 }}>
        <Typography
          component="a"
          sx={{
            fontSize: 11,
            borderRadius: '4px',
            py: '3px',
            px: '7px',
            background: 'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
            color: '#fff',
            textTransform: 'uppercase',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
        >
          {data?.tag}
        </Typography>
      </Box>
      <Box
        sx={{
          height: '360px',
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: "''",
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0.5,
            backgroundImage: 'linear-gradient(to top, #000, transparent)',
          },
        }}
      >
        <PostImg className="postImage" src={data?.photo} alt={data?.title} />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          p: '20px',
          zIndex: 5,
        }}
      >
        <Link href={`/blog/${data?.slug}`}>
          <Typography
            component="h6"
            sx={{
              color: '#fff',
              mb: '10px',
              borderBottom: '2px solid transparent',
              display: 'inline-block',
              lineHeight: 1.3,
              transition: 'all 0.5s ease',
              cursor: 'pointer',
              '&:hover': {
                color: '#0066ff',
                borderBottom: '2px solid #eef4f8',
              },
            }}
          >
            {data?.title}
          </Typography>
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="span"
            variant="span"
            sx={{
              borderRight: '1px solid #9993',
              fontSize: 12,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            <ImageWrapper
              src="/images/avatar.png"
              alt="author"
              style={{
                width: 15,
                height: 15,
                borderRadius: '50%',
                objectFit: 'cover',
                marginRight: '3px',
              }}
            />
            <Typography
              component="small"
              sx={{
                display: 'inline-block',
                fontSize: 13,
                lineHeight: 1.7,
                color: '#fff',
                mr: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#0066ff',
                },
              }}
            >
              {'By ' + 'Admin'}
            </Typography>
          </Box>
          <Box
            component="span"
            variant="span"
            sx={{
              px: '10px',
              color: '#fff',
              fontSize: 12,
              display: 'inline-flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#0066ff',
              },
            }}
          >
            <CalendarTodayIcon sx={{ fontSize: 13, mr: '4px', mb: '2px' }} />
            <Typography
              component="small"
              sx={{ display: 'inline-block', fontSize: 13, lineHeight: 1.7 }}
            >
              {data.time}
            </Typography>
          </Box>
        </Box>
        <Typography
          className="postInfo"
          component="p"
          sx={{
            mt: '20px',
            fontSize: 11,
            color: '#fff',
            display: 'none',
            lineHeight: 2,
          }}
        >
          {data?.description?.head.slice(0, 120) + ' [...]'}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogSlide;
