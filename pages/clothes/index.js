import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';
import Clothes from '../../src/components/Clothes';

const ClothesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Clothes - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <Clothes />
    </Layout>
  );
};

export default ClothesPage;
