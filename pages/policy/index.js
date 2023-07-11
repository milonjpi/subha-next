import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Policy from '../../src/components/Policy';

const PolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Policy-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Policy />
    </Layout>
  );
};

export default PolicyPage;
