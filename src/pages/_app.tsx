import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import nProgress from "nprogress";
import Router from "next/router";

const inter = Inter({ subsets: ["latin"] });

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

import "@/styles/globals.css";
import "@/styles/nprogress.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
