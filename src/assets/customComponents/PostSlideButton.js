import styled from '@emotion/styled';
import Box from '@mui/material/Box';

const PostSlideButton = styled(Box)(({ theme }) => ({
  borderRadius: '5px',
  width: '35px !important',
  height: '35px !important',
  background: '#fff',
  '&:hover': {
    background: 'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
    '&:after': {
      color: '#fff',
    },
  },
  '&:after': {
    color: '#0066ff',
    fontSize: '15px !important',
    fontWeight: 700,
  },
}));

export default PostSlideButton;
