import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';
import Clothes from '../../src/components/Clothes';

const ClothesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Clothes-Subha Apparels</title>
        <meta name="description" content="SUBHA APPAREL" />
      </Head>
      <Clothes />
    </Layout>
  );
};

export default ClothesPage;
