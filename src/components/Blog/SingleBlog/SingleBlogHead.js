import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const SingleBlogHead = ({ data }) => {
  return (
    <Box component="header" sx={{ py: '50px' }}>
      <Container maxWidth="lg">
        <Box>
          <Typography
            component="h2"
            sx={{
              fontSize: 45,
              color: '#000',
              mb: '20px',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {data?.title}
          </Typography>
          <Typography
            component="small"
            sx={{
              fontSize: 12,
              lineHeight: 2,
              display: 'flex',
              alignItems: 'center',
              color: '#000',
              mb: '20px',
              fontWeight: 700,
              justifyContent: 'center',
            }}
          >
            <Typography
              component="a"
              sx={{
                color: '#0066ff',
                textTransform: 'uppercase',
                fontWeight: 700,
                display: 'inline-block',
                fontSize: 12,
                lineHeight: 2,
                pr: '16px',
                mr: '16px',
                borderRight: '1px solid #0002',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              {data?.tag}
            </Typography>
            <AccessTimeIcon
              sx={{
                mr: '5px',
                fontSize: 15,
                color: '#424040',
              }}
            />
            <Typography
              component="span"
              variant="span"
              sx={{ fontWeight: 400 }}
            >
              Posted on {data?.time}
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SingleBlogHead;
