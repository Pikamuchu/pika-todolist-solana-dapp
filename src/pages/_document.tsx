import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

const APP_NAME = 'PikaToList';
const APP_DESCRIPTION = 'Simple todo list web3 distributed application using Solana blockchain network.';
const APP_COLOR = '#f4dc26';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* Must */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="keywords" content="todo, list, web3, dapp, react, pwa, solana" />
          <link rel="shortcut icon" type="image/png" href="/icon.png"/>
          <link rel="shortcut icon" sizes="192x192" href="/icon.png"/>
	  <link rel="manifest" href="/manifest.json" />

          {/* Android */}
          <meta name="theme-color" content={APP_COLOR} />
          <meta name="mobile-web-app-capable" content="yes" />

          {/* iOS */}
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <link rel="apple-touch-icon" href="/icon.png"></link>

          {/* Windows */}
          <meta name="msapplication-navbutton-color" content={APP_COLOR} />
          <meta name="msapplication-TileColor" content={APP_COLOR} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
