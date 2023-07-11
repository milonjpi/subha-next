import Head from 'next/head';
import About from '../../src/components/About';
import Layout from '../../src/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;

