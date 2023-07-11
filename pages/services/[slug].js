import Head from 'next/head';
import { serviceData } from '../../src/assets/data';
import Layout from '../../src/components/Layout/index';
import SingleService from '../../src/components/Services/SingleService';

const SingleServicePage = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Single Service - TBZ Engineering</title>
        <meta name="description" content="TBZ Engineering" />
      </Head>
      <SingleService data={data} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const data = serviceData.find((item) => item.slug === params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default SingleServicePage;
