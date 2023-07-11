import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';
import { projectData } from '../../src/assets/data';
import Layout from '../../src/components/Layout/index';
import SingleProject from '../../src/components/Portfolio/SingleProject';

const SingleProjectPage = ({ data }) => {

  return (
    <Layout>
      <Head>
        <title>Single Project-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <SingleProject data={data} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const data = projectData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default SingleProjectPage;
