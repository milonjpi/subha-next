import Head from 'next/head';
import BlogSection from '../src/components/Home/BlogSection';
import ContactSection from '../src/components/Home/ContactSection';
import HeroSection from '../src/components/Home/HeroSection';
import OurProduct from '../src/components/Home/OurProduct';
import Portfolio from '../src/components/Home/Portfolio';
import Layout from '../src/components/Layout';
import HomeCategories from '../src/components/Home/HomeCategories';
import FeaturedProducts from '../src/components/Home/FeaturedProducts';
import HomeAbout from '../src/components/Home/HomeAbout';
import HomeBlog from '../src/components/Home/HomeBlog';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home-Subha Apparels</title>
        <meta name="description" content="Subha Apparels" />
      </Head>
      <HeroSection />
      <HomeCategories />
      <FeaturedProducts />
      <HomeAbout />
      <HomeBlog />
      {/* <Portfolio /> */}
      {/* <OurProduct /> */}
      {/* <BlogSection /> */}
      {/* <ContactSection /> */}
    </Layout>
  );
}
