import Head from 'next/head';
import BlogSection from '../src/components/Home/BlogSection';
import ContactSection from '../src/components/Home/ContactSection';
import HeroSection from '../src/components/Home/HeroSection';
import OurProduct from '../src/components/Home/OurProduct';
import Portfolio from '../src/components/Home/Portfolio';
import Layout from '../src/components/Layout';
import HomeCategories from '../src/components/Home/HomeCategories';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home-TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <HeroSection />
      <HomeCategories />
      <Portfolio />
      {/* <OurProduct /> */}
      <BlogSection />
      {/* <ContactSection /> */}
    </Layout>
  );
}
