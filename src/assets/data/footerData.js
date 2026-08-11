import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

// footer data
const footerData = {
  info: [
    {
      id: 1,
      icon: <HomeOutlinedIcon sx={{ color: '#fff', fontSize: 22 }} />,
      info: 'Mirpur-01, Dhaka-1205, Bangladesh',
    },
    {
      id: 2,
      icon: <EmailOutlinedIcon sx={{ color: '#fff', fontSize: 20 }} />,
      info: 'contact@oliveco.store',
    },
    {
      id: 3,
      icon: <PhoneIphoneOutlinedIcon sx={{ color: '#fff', fontSize: 20 }} />,
      info: '+8801915985017',
    },
  ],
  categories: [
    {
      id: 1,
      title: 'Mens Wear',
      path: '/clothes',
    },
    {
      id: 2,
      title: 'Women Wears',
      path: '/clothes',
    },
    {
      id: 3,
      title: 'Boys Fashion',
      path: '/clothes',
    },
    {
      id: 4,
      title: 'Girls Design',
      path: '/clothes',
    },
    {
      id: 5,
      title: 'Kids Items',
      path: '/clothes',
    },
  ],
  links: [
    {
      id: 1,
      title: 'About Us',
      path: '/about',
    },
    {
      id: 2,
      title: 'Blog',
      path: '/blog',
    },
    {
      id: 3,
      title: 'Contact',
      path: '/contact',
    },
    {
      id: 5,
      title: 'Terms & Condition',
      path: '/termsandcondition',
    },
    {
      id: 6,
      title: 'Privacy Policy',
      path: '/policy',
    },
  ],
};

export default footerData;
