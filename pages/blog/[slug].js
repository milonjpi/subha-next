import Head from 'next/head';
import React from 'react';
import { postsData } from '../../src/assets/data';
import SingleBlog from '../../src/components/Blog/SingleBlog';
import Layout from './../../src/components/Layout/index';

const SingleBlogPage = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - {data?.name}</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <SingleBlog data={data} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const data = postsData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default SingleBlogPage;
