import Head from "next/head";
import { createContext, useState } from "react";
import "../styles/globals.css";
export const QrContext = createContext();

function MyApp({ Component, pageProps }) {
  const [qrCodeInfo, setQrCodeInfo] = useState("");
  return (
    <>
      <QrContext.Provider value={[qrCodeInfo, setQrCodeInfo]}>
        <Head>
          <title>OneTap</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <div className="main-bg">
          <Component {...pageProps} />
        </div>
      </QrContext.Provider>
    </>
  );
}

export default MyApp;
