import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Policy from '../../src/components/Policy';

const PolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Policy-Subha Apparels</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <Policy />
    </Layout>
  );
};

export default PolicyPage;
