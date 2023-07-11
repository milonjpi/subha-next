import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../src/lib/createEmotionCache';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';

//css
import 'nprogress/nprogress.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/globals.css';
import Loading from '../src/components/Loading';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
      setLoading(false);
    };
    setTimeout(() => {
      setLoading(false);
    }, 500);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Loading loading={loading} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
