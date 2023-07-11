import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageHeader = ({ titleLeft, titleRight, subTitle, mb = '100px' }) => {
  return (
    <Box sx={{ mb: mb }}>
      <Typography
        component="h2"
        sx={{
          mb: '20px',
          fontSize: { xs: 30, md: 45 },
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.4,
        }}
      >
        {titleLeft + ' '}
        <Typography
          component="span"
          variant="span"
          sx={{
            color: '#157efb',
            position: 'relative',
            display: 'inline-block',
            px: '5px',
            mx: '5px',
            '&:after': {
              position: 'absolute',
              content: "''",
              left: 0,
              bottom: 0,
              width: '100%',
              height: '40%',
              backgroundColor: '#157efb',
              opacity: '8%',
            },
          }}
        >
          {titleRight}
        </Typography>
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#666',
          fontSize: 15,
          lineHeight: 1.7,
          textAlign: 'center',
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
