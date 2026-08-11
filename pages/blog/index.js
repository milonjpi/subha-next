import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Blog from '../../src/components/Blog';

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <Blog />
    </Layout>
  );
};

export default BlogPage;
