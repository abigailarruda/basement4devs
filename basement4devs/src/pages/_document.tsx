import { Html, Head, Main, NextScript } from 'next/document';

function BasementForDevsDocument() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          // eslint-disable-next-line max-len
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Work+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />

        <NextScript />
      </body>
    </Html>
  );
}

export default BasementForDevsDocument;
