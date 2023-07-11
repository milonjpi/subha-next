import Footer from './Footer';
import Header from './Header';
import TopHeader from './TopHeader';

const Layout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
