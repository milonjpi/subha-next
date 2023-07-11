import Head from 'next/head';
import React from 'react';
import Layout from '../../src/components/Layout';
import TermsAndCondition from '../../src/components/TermsAndCondition';

const TermsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms and Condition-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <TermsAndCondition />
    </Layout>
  );
};

export default TermsPage;
