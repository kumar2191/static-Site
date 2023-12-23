import "../styles/globals.css";
import "../styles/PopUp/Pop.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import "regenerator-runtime/runtime";
import Wrapper from "../components/appWrapper";
import { HeaderMegaMenu } from "src/components/nav";
// import Loader from '../components/LoaderComponent/'
import Head from "next/head";
import { AppShell } from "@mantine/core";
// import NProgress from 'nprogress'; //nprogress module
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "react-toastify/dist/ReactToastify.css";

import Router from 'next/router';
import { ToastContainer } from "react-toastify";
import Footer from '../components/Footer2/index'
type Props = AppProps & {
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  const [loading, setLoading] = useState<boolean>(true)
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  NProgress.configure({ showSpinner: false, color: "red" })

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title>Rani Engineering Works</title>
      </Head>
      {
        !loading ?
          <Wrapper>
            <AppShell>
              <HeaderMegaMenu />
              <Component {...pageProps} />
              <Footer />
            </AppShell>
            <ToastContainer
              limit={1}
              closeOnClick
              newestOnTop={false}
              pauseOnFocusLoss
              theme="dark"
            />
          </Wrapper>
          : null
      }
    </>
  );

}

export default MyApp;
