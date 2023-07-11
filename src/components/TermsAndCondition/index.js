import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const TermsAndCondition = () => {
  return (
    <Box component="section" sx={{ py: '100px' }}>
      <Container maxWidth="lg">
        <Box>
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
            {'Terms and '}
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
              Condition
            </Typography>
          </Typography>
          <Typography
            component="p"
            sx={{
              color: '#666',
              fontSize: 15,
              lineHeight: 1.7,
              textAlign: 'center',
              mb: '30px',
            }}
          >
            {
              'www.tbz.com.bd is a tech website, we are provided sales and service, we reserve the right to change these terms and conditions at any time. Any such changes will take effect when posted on the website (see date at the top) and it is your responsibility to read the terms and conditions on each occasion you use this website and your continued use of the website shall signify your acceptance to be bound by the latest terms and conditions.'
            }
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
            {
              'www.tbz.com.bd একটি প্রযুক্তিগত ওয়েবসাইট, আমাদের বিক্রয় এবং পরিষেবা প্রদান করা হয়, আমরা যে কোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি। ওয়েবসাইটে পোস্ট করা হলে এই ধরনের যেকোনো পরিবর্তন কার্যকর হবে (উপরে তারিখ দেখুন) এবং আপনি এই ওয়েবসাইটটি ব্যবহার করেন এমন প্রতিটি অনুষ্ঠানে নিয়ম ও শর্তাবলী পড়া আপনার দায়িত্ব এবং ওয়েবসাইটটির আপনার ক্রমাগত ব্যবহার আপনার সম্মতি আবদ্ধ হওয়ার ইঙ্গিত দেবে। সর্বশেষ শর্তাবলী দ্বারা।'
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndCondition;
