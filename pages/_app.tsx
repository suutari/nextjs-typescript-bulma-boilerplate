import {AppProps} from "next/app";
import Layout from "../components/layout";
import "../styles/global.sass";

export default function App({Component, pageProps}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
