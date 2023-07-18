import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

// services
export const serviceData = [
  {
    title: 'IT Consultation',
    slug: 'it-consultation',
    count: '01',
    icon: '/images/service/1.png',
    description:
      'We provide IT consultation service your business for more profit gain.',
    brief:
      'We provide IT consultation service your business for more profit gain. We provide IT consultation service your business for more profit gain.',
    buttons: [
      { title: 'Website', path: '#' },
      { title: 'Mobile App', path: '#' },
    ],
  },
  {
    title: 'Data Security',
    slug: 'data-security',
    count: '02',
    icon: '/images/service/2.png',
    description: 'We can manage backup & recovery, bulk data services.',
    brief:
      'We can manage backup & recovery, bulk data services. We can manage backup & recovery, bulk data services.',
    buttons: [
      { title: 'Management', path: '#' },
      { title: 'Backup & Recovery', path: '#' },
      { title: 'Transfer', path: '#' },
    ],
  },
  {
    title: 'Website Development',
    slug: 'website-development',
    count: '03',
    icon: '/images/service/3.png',
    description:
      'We develop e-commerce site with payment gateway full optimize with SEO service.',
    brief:
      'We develop e-commerce site with payment gateway full optimize with SEO service. We develop e-commerce site with payment gateway full optimize with SEO service.',
    buttons: [
      { title: 'E-commerce', path: '#' },
      { title: 'Landing Page', path: '#' },
      { title: 'CMS', path: '#' },
    ],
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    count: '04',
    icon: '/images/service/4.png',
    description:
      'More beautiful also eye catching Design we provide. You can trust our design team.',
    brief:
      'More beautiful also eye catching Design we provide. You can trust our design team. More beautiful also eye catching Design we provide. You can trust our design team.',
    buttons: [
      { title: 'Website', path: '#' },
      { title: 'Mobile App', path: '#' },
    ],
  },
  {
    title: 'Cloud Services',
    slug: 'cloud-services',
    count: '05',
    icon: '/images/service/5.png',
    description:
      'We have cloud service, with full backup, also VPS and hosting service available.',
    brief:
      'We have cloud service, with full backup, also VPS and hosting service available. We have cloud service, with full backup, also VPS and hosting service available.',
    buttons: [
      { title: 'Cloud Storage', path: '#' },
      { title: 'Hosting & VPS', path: '#' },
    ],
  },
  {
    title: 'IT Infrastructure Develop',
    slug: 'it-infrastructure-develop',
    count: '06',
    icon: '/images/service/6.png',
    description:
      'Data center manage, Active directory implement, Mail server implement.',
    brief:
      'Data center manage, Active directory implement, Mail server implement. Data center manage, Active directory implement, Mail server implement.',
    buttons: [
      { title: 'Network', path: '#' },
      { title: 'Security', path: '#' },
      { title: 'Manage', path: '#' },
    ],
  },
  {
    title: 'Software Development',
    slug: 'software-development',
    count: '07',
    icon: '/images/service/7.png',
    description:
      'Payroll Solutions, Vehicle Management, ERP solution on going project.',
    brief:
      'Payroll Solutions, Vehicle Management, ERP solution on going project. Payroll Solutions, Vehicle Management, ERP solution on going project.',
    buttons: [
      { title: 'Website', path: '#' },
      { title: 'Application', path: '#' },
      { title: 'CMS', path: '#' },
    ],
  },
  {
    title: 'SEO Service Provider',
    slug: 'seo-service-provider',
    count: '08',
    icon: '/images/service/8.png',
    description:
      'On page SEO, Off Page SEO, Website optimized, Website visitor growing.',
    brief:
      'On page SEO, Off Page SEO, Website optimized, Website visitor growing. On page SEO, Off Page SEO, Website optimized, Website visitor growing.',
    buttons: [
      { title: 'Website', path: '#' },
      { title: 'SEO', path: '#' },
    ],
  },
];

// choose us
export const chooseUsOption = [
  'Latest IT Solutions & Integration with ERP system ',
  'Payroll system Automation',
  ' AI Machine & Deep Learning',
  'Dedicated Support 24/7',
];

// projects
export const projectTag = [
  { title: 'All', value: '' },
  { title: 'IT Consultation', value: 'consultation' },
  { title: 'Data Security', value: 'security' },
  { title: 'Website Development', value: 'development' },
  { title: 'Software Development', value: 'software' },
  { title: 'UI/UX Design', value: 'design' },
  { title: 'Cloud Service', value: 'cloud' },
];

export const projectData = [
  {
    id: 1,
    title: 'Infrastructure Upgrade',
    slug: 'infrastructure-upgrade',
    serviceCat: ['IT Consultation'],
    description:
      'We have expertise IT infrastructure Upgrade so can trust out team.',
    photo: '/images/projects/1.png',
    buttons: ['Consultation', 'Management'],
    date: 'January 14th 2021',
    team: ['TBZ Network Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Clean and safe wiring',
        'Compatible design and perfect work',
        'Best equipment positioning',
        'All works follow compliance rules',
      ],
    },
    screenshot: ['/images/projects/1.png', '/images/projects/1.png'],
  },
  {
    id: 2,
    title: 'Eastern IT Website',
    slug: 'eastern-it-website',
    serviceCat: ['Website Development', 'UI/UX Design'],
    description:
      'Faster, SEO friendly, stunning UI/UX design and full documented web development.',
    photo: '/images/projects/2.png',
    buttons: ['Laravel', 'PHP', 'HTML/CSS', 'Figma'],
    date: 'March 22th 2021',
    team: ['TBZ Developer Team', 'TBZ Management Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/2.png', '/images/projects/2.png'],
  },
  {
    id: 3,
    title: 'Massive Computers Website',
    slug: 'massive-computers-website',
    serviceCat: ['Website Development', 'UI/UX Design'],
    description:
      'Responsive web development with javascript framework which is best for SEO.',
    photo: '/images/projects/3.png',
    buttons: ['NextJS', 'HTML/CSS', 'Figma'],
    date: 'July 18th 2021',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/3.png', '/images/projects/3.png'],
  },
  {
    id: 4,
    title: 'Payroll Management System',
    slug: 'payroll-management-system',
    serviceCat: ['On Going Project'],
    description:
      'We are provide full automation system with hardware and software.',
    photo: '/images/projects/4.png',
    buttons: ['NodeJS', 'ReactJS', 'MongoDB'],
    date: 'December 08th 2021',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/4.png', '/images/projects/4.png'],
  },

  {
    id: 5,
    title: 'Network Management System',
    slug: 'network-management-system',
    serviceCat: ['Web Development'],
    description: 'You can manage your network system with full documentation.',
    photo: '/images/projects/5.png',
    buttons: ['NodeJS', 'ReactJS', 'MongoDB'],
    date: 'February 24th 2022',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/5.png', '/images/projects/5.png'],
  },
  {
    id: 6,
    title: 'Transport Management System',
    slug: 'transport-management-system',
    serviceCat: ['Web Development'],
    description:
      'You can manage your transport with full annual or month loss and profit.',
    photo: '/images/projects/6.png',
    buttons: ['NodeJS', 'ReactJS', 'MongoDB'],
    date: 'April 28th 2022',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/6.png', '/images/projects/6.png'],
  },
  {
    id: 7,
    title: 'Visitor Management System',
    slug: 'visitor-management-system',
    serviceCat: ['Web Development'],
    description: 'Managing and tracking your office or factory visitors.',
    photo: '/images/projects/7.png',
    buttons: ['NodeJS', 'ReactJS', 'MongoDB'],
    date: 'July 12th 2022',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/7.png', '/images/projects/7.png'],
  },
  {
    id: 8,
    title: 'Bike Stand Management',
    slug: 'bike-stand-management',
    serviceCat: ['Web Development'],
    description:
      'You can manage your office, factory, shopping mall vehicle parking system.',
    photo: '/images/projects/8.png',
    buttons: ['NodeJS', 'ReactJS', 'MongoDB'],
    date: 'October 2nd 2022',
    team: ['TBZ Developer Team'],
    challenge: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      body: [
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt',
      ],
    },
    result: {
      head: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt architecto in dignissimos deserunt, ex nisi provident doloremque eius possimus quasi quia, nihil dolor, nulla quibusdam tempore quaerat',
      body: [
        'Best faster website develop',
        'Complete SEO Friendly',
        'Stunning UI/UX Design',
        'Full documented with workflow',
      ],
    },
    screenshot: ['/images/projects/8.png', '/images/projects/8.png'],
  },
];

// products
export const productList = [
  {
    id: 1,
    title: 'Brand Computer',
    description:
      'TBZ Provides you all IT products, fast process, cheap price and 100% genuine products.',
    icon: '/images/products/computer.jpeg',
    path: 'http://shop.tbz.com.bd/computers.html',
    mb: '25px',
  },
  {
    id: 2,
    title: 'Printers',
    description:
      'TBZ Provides you all IT products, fast process, cheap price and 100% genuine products.',
    icon: '/images/products/printer.png',
    path: 'http://shop.tbz.com.bd/printers.html',
    mb: '25px',
  },
  {
    id: 3,
    title: 'Network Product',
    description:
      'TBZ Provides you all IT products, fast process, cheap price and 100% genuine products.',
    icon: '/images/products/network.png',
    path: 'http://shop.tbz.com.bd',
    mb: 0,
  },
];

//posts
export const postsData = [
  {
    id: 1,
    tag: 'News',
    title: 'Crypto Trends 2023',
    slug: 'crypto-trends-2023',
    description: {
      head: 'The period Web3 shields a digit of styles witch is make up what is occasionally called the decentralized internet.',
      body: 'The period Web3 shields a digit of styles witch is make up what is occasionally called the decentralized internet. The vision here is to create an internet that is not controlled by huge corporations like Google GOOG +0.9% and Facebook that set most of the rules about what we can and can not do online today.',
      foot: 'The vision here is to create an internet that is not controlled by huge corporations like Google GOOG +0.9% and Facebook that set most of the rules about what we can and can not do online today.',
    },
    photo: '/images/posts/1.jpeg',
    extraPhoto: {
      first: '/images/posts/1.jpeg',
      second: '/images/posts/1.jpeg',
    },
    author: 'Admin',
    time: 'January 14, 2021',
  },
  {
    id: 2,
    tag: 'Technology',
    title: 'How To Become Web Developer',
    slug: 'how-to-become-web-developer',
    description: {
      head: 'You must have a knowing of HTML, CSS, and JavaScript. Its also suggested to learn about CSS and CSS frameworks.',
      body: 'You must have a knowing of HTML, CSS, and JavaScript. Its also suggested to learn about CSS and CSS frameworks. Emerging these important web development skills will give you the basis and logic for communicating with programming languages.',
      foot: 'Emerging these important web development skills will give you the basis and logic for communicating with programming languages.',
    },
    photo: '/images/posts/2.jpeg',
    extraPhoto: {
      first: '/images/posts/2.jpeg',
      second: '/images/posts/2.jpeg',
    },
    author: 'Admin',
    time: 'June 10, 2021',
  },
  {
    id: 3,
    tag: 'Tips & Tricks',
    title: 'Wire Frame For UI/UX?',
    slug: 'wire-frame-for-ui-ux',
    description: {
      head: 'UI/UX Design is utmost vital periods which includes imagining the minimal of digital applications.',
      body: 'UI/UX Design is utmost vital periods which includes imagining the minimal of digital applications. A wire frame is a layout of a product that establishes what line elements will exist on key pages. It is a dangerous part of the contact design process.',
      foot: 'A wire frame is a layout of a product that establishes what line elements will exist on key pages. It is a dangerous part of the contact design process.',
    },
    photo: '/images/posts/3.jpeg',
    extraPhoto: {
      first: '/images/posts/3.jpeg',
      second: '/images/posts/3.jpeg',
    },
    author: 'Admin',
    time: 'January 28, 2022',
  },
  {
    id: 4,
    tag: 'News',
    title: 'VR Game, Opportunity & Challenge',
    slug: 'vr-game-opportunity-challenge',
    description: {
      head: 'If theres one way that wireless technology has changed the way we work, its that will everyone is now connected',
      body: 'If theres one way that wireless technology has changed the way we work, its that will everyone is now connected',
      foot: 'If theres one way that wireless technology has changed the way we work, its that will everyone is now connected',
    },
    photo: '/images/posts/4.jpeg',
    extraPhoto: {
      first: '/images/posts/4.jpeg',
      second: '/images/posts/4.jpeg',
    },
    author: 'Admin',
    time: 'June 05 2022',
  },
];

// contact section
export const allContactInfo = [
  {
    id: 1,
    title: 'Address',
    info: '39 Kazi Bhaban, 6th Floor, New Elephant Road, Dhaka-1205',
  },
  {
    id: 2,
    title: 'Email',
    info: 'sales@tbz.com.bd',
  },
  {
    id: 3,
    title: 'Work Hour',
    info: 'Mon - Sat: 9:00 - 18:00',
  },
];

// footer data
export const footerData = {
  info: [
    {
      id: 1,
      icon: <HomeOutlinedIcon sx={{ color: '#fff', fontSize: 22 }} />,
      info: 'Chan Mia Bhaban, Ground Floor, Gulisthan, Dhaka-1205',
    },
    {
      id: 2,
      icon: <EmailOutlinedIcon sx={{ color: '#fff', fontSize: 20 }} />,
      info: 'info@subhaapparel.ocm',
    },
    {
      id: 3,
      icon: <PhoneIphoneOutlinedIcon sx={{ color: '#fff', fontSize: 20 }} />,
      info: '+8801101000001',
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
