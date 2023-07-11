import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Services from '../../src/components/Services';

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Services-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Services />
    </Layout>
  );
};

export default ServicesPage;
