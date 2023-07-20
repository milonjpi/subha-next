import Head from 'next/head';
import React from 'react';
import SingleBlog from '../../src/components/Blog/SingleBlog';
import Layout from './../../src/components/Layout/index';
import blogsData from '../../src/assets/data/blogsData';

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
  const data = blogsData.find((item) => item.slug === params?.slug);

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
