import Head from 'next/head';
import About from '../../src/components/About';
import Layout from '../../src/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About - OLIVE & CO.</title>
        <meta name="description" content="OLIVE & CO." />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;

