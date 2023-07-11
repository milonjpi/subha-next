import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const HeaderContact = ({ display = { xs: 'none', lg: 'flex' } }) => {
  return (
    <Box
      sx={{
        display: display,
        alignItems: 'center',
        mr: 5,
      }}
    >
      <IconButton
        sx={{
          cursor: 'default',
          background: 'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
        }}
      >
        <PhoneOutlinedIcon fontSize="small" color="common" />
      </IconButton>
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontSize: 13, color: '#6c757d' }}>
          hotline 24/7
        </Typography>
        <Typography sx={{ fontSize: 15, color: '#000', fontWeight: 700 }}>
          +8801713991638
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderContact;
