import Head from 'next/head';
import About from '../../src/components/About';
import Layout from '../../src/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>About-Subha Apparels</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <About />
    </Layout>
  );
};

export default AboutPage;

