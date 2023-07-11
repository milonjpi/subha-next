import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import React from 'react';
import Layout from '../../src/components/Layout';

const FourOhFour = () => {
  return (
    <Layout>
      <Head>
        <title>404 - Page not found</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pb: 5,
          }}
        >
          <Typography
            component="h1"
            sx={{
              borderRight: '1px solid rgba(0, 0, 0, .3 )',
              mr: '20px',
              py: '10px',
              pr: '23px',
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            404
          </Typography>
          <Typography component="h2" sx={{ fontSize: 14, color: '#000' }}>
            This page could not be found.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
};

export default FourOhFour;
