import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";
import customTheme from "../config/theme";
import "@fontsource/poppins";
import Router from "next/router";
import NProgress from "nprogress";

export default function App({ Component, pageProps }) {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });


  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
