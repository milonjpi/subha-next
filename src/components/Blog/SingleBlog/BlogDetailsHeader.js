import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

const BlogDetailsHeader = () => {
  return (
    <Box
      sx={{
        mb: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          component="a"
          sx={{ display: 'flex', alignItems: 'center', mr: '48px' }}
        >
          <AccountCircleIcon sx={{ color: '#0066ff', fontSize: 18, mr: 1 }} />
          <Typography component="span" sx={{ fontSize: 12 }}>
            By Admin
          </Typography>
        </Typography>
        <Typography
          component="a"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <CommentIcon sx={{ fontSize: 18, mr: 1 }} />
          <Typography component="span" sx={{ fontSize: 12 }}>
            0 Comments
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography
          component="a"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <ReportOutlinedIcon sx={{ fontSize: 18, mr: 1 }} />
          <Typography component="span" sx={{ fontSize: 12 }}>
            Report
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogDetailsHeader;
