import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import Layout from '../../src/components/Layout';
import SingleCloth from '../../src/components/Clothes/SingleCloth';
import productData from '../../src/assets/data/products';

const SingleClothPage = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>OLIVE & CO. - {data?.name}</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <SingleCloth data={data} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const data = productData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default SingleClothPage;
