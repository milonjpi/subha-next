import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Blog from '../../src/components/Blog';

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Blog />
    </Layout>
  );
};

export default BlogPage;

