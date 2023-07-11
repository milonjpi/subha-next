import Head from 'next/head';
import React from 'react';
import Contact from '../../src/components/Contact';
import Layout from '../../src/components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
