import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Policy from '../../src/components/Policy';

const PolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Policy - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <Policy />
    </Layout>
  );
};

export default PolicyPage;
