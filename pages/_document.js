import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&display=optional"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="/img/favicon.ico"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/img/favicon.ico"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/img/favicon.ico"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:400,700&display=optional"
            rel="stylesheet"
          />
          <script async type="text/javascript" src="/js/jquery.1.11.1.js"></script>
          <script async type="text/javascript" src="/js/bootstrap.js"></script>
        </Head>
        <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
