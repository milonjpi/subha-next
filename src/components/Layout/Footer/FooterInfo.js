import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const socialIconList = [TwitterIcon, FacebookIcon, LinkedInIcon, InstagramIcon];

const FooterInfo = ({ data }) => {
  return (
    <Box>
      <Typography
        component="a"
        sx={{
          mb: '10px',
          display: 'inline-block',
          color: '#fff',
          fontSize: '35px',
          fontWeight: 700,
          fontFamily: 'Open Sans',
          textTransform: 'uppercase',
        }}
      >
        OLIVE & CO.
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#fff',
          fontSize: 14,
          lineHeight: 2,
          mb: '24px',
        }}
      >
        The ultimate clothing to see <br />
        the world in.
      </Typography>
      <List sx={{ mb: '24px' }}>
        {data?.map((item) => (
          <ListItem key={item.id} disableGutters>
            <ListItemIcon sx={{ minWidth: '30px' }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.info}
              primaryTypographyProps={{
                fontSize: 13,
                color: '#aaa7a7',
              }}
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: '10px', display: 'flex' }}>
        {socialIconList.map((Item, index) => (
          <Typography
            key={index}
            component="a"
            sx={{
              width: 33,
              height: 33,
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2c2c2c',
              m: '5px',
              cursor: 'pointer',
              '&:hover': {
                background:
                  'linear-gradient(to right, #0c3df4 0%, #02b5ff 100%)',
                '& .footerSocialIcon': {
                  color: '#fff',
                },
              },
            }}
          >
            <Item
              className="footerSocialIcon"
              fontSize="small"
              sx={{ color: '#aaa7a7', transition: 'all 0.5s ease' }}
            />
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FooterInfo;
