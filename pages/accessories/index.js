import React from 'react';
import Layout from '../../src/components/Layout';
import Head from 'next/head';
import Accessories from '../../src/components/Accessories';

const AccessoriesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Clothes-Subha Apparels</title>
        <meta name="description" content="SUBHA APPAREL" />
      </Head>
      <Accessories />
    </Layout>
  );
};

export default AccessoriesPage;
