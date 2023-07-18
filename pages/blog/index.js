import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Blog from '../../src/components/Blog';

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog-Subha Apparels</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <Blog />
    </Layout>
  );
};

export default BlogPage;
