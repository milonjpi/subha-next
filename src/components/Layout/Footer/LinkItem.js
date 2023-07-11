import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';

const LinkItem = ({ title, data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'flex-Start', lg: 'center' },
      }}
    >
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
          {title}
        </Typography>
        <List sx={{ mb: '24px' }}>
          {data.map((item) => (
            <ListItem key={item.id} disableGutters>
              <Link href={item.path} passHref>
                <Typography
                  component="a"
                  sx={{
                    fontSize: 13,
                    color: '#aaa7a7',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'all 0.5s ease',
                    '&:hover': {
                      color: '#0066ff',
                    },
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default LinkItem;
