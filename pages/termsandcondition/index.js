import Head from 'next/head';
import React from 'react';
import Layout from '../../src/components/Layout';
import TermsAndCondition from '../../src/components/TermsAndCondition';

const TermsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms and Condition-Subha Apparels</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <TermsAndCondition />
    </Layout>
  );
};

export default TermsPage;
