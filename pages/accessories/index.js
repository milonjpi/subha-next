import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';
import Accessories from '../../src/components/Accessories';

const AccessoriesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Clothes - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <Accessories />
    </Layout>
  );
};

export default AccessoriesPage;
