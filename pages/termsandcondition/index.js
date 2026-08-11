import Head from 'next/head';
import React from 'react';
import Layout from '../../src/components/Layout';
import TermsAndCondition from '../../src/components/TermsAndCondition';

const TermsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms and Condition - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <TermsAndCondition />
    </Layout>
  );
};

export default TermsPage;
