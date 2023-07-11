import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { allContactInfo } from '../../../assets/data';
import Link from 'next/link';

const InfoSection = () => {
  return (
    <Box>
      <Typography component="p" sx={{ color: '#fff', fontSize: 13 }}>
        Hotline 24/7
      </Typography>
      <Typography
        component="h4"
        sx={{ color: '#fff', fontSize: { xs: 20, md: 24 } }}
      >
        +8801713991638
      </Typography>
      <List sx={{ my: '50px' }}>
        {allContactInfo.map((item) => (
          <ListItem key={item.id} disableGutters>
            <Typography component="p" sx={{ color: '#fff', fontSize: 15 }}>
              <Typography
                component="span"
                variant="span"
                sx={{
                  fontWeight: 700,
                  display: 'inline-block',
                  pr: 1.2,
                }}
              >
                {item.title}:
              </Typography>
              {item.info}
            </Typography>
          </ListItem>
        ))}
      </List>
      <Link href="/contact" passHref>
        <Typography
          component="a"
          sx={{
            color: '#fff',
            textDecoration: 'underline',
            textTransform: 'uppercase',
            fontSize: 13,
            display: 'inline-block',
            cursor: 'pointer',
          }}
        >
          Get Direction
        </Typography>
      </Link>
    </Box>
  );
};

export default InfoSection;
