import Head from 'next/head';
import Layout from '../../src/components/Layout';
import Portfolio from '../../src/components/Portfolio';

const PortfolioPage = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <Portfolio />
    </Layout>
  );
};

export default PortfolioPage;
