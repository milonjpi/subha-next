import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import NewsLetterButton from '../../../assets/customComponents/NewsLetterButton';
import Link from 'next/link';


const NewsLetter = () => {
  return (
    <Box>
      <Typography
        component="h6"
        sx={{
          color: '#fff',
          mt: '10px',
          mb: '15px',
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Newsletter
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#aaa7a7',
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        Register now to get latest updates on promotions & coupons.
      </Typography>
      <Box
        sx={{
          position: 'relative',
          my: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'stretch',
          width: '100%',
          borderRadius: '5px',
        }}
      >
        <InputBase
          sx={{
            background: '#1f1f1f',
            color: '#fff',
            fontSize: 12,
            px: 2,
            py: 1.2,
            borderRadius: '5px 0 0 5px',
            flex: '1 1 auto',
          }}
        />
        <NewsLetterButton>Subscribe</NewsLetterButton>
      </Box>
      <Typography
        component="p"
        sx={{ fontSize: 13, color: '#aaa7a7', fontStyle: 'italic' }}
      >
        {'By subscribing, you accepted the our '}
        <Link href="/policy" passHref>
          <Typography
            component="a"
            sx={{
              fontSize: 13,
              color: '#aaa7a7',
              fontStyle: 'italic',
              cursor: 'pointer',
              textDecoration: 'underline',
              '&:hover': {
                color: '#0066ff',
              },
            }}
          >
            Policy
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};

export default NewsLetter;
