import Head from 'next/head';
import React from 'react';
import Contact from '../../src/components/Contact';
import Layout from '../../src/components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
