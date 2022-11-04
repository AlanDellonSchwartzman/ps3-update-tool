import React from 'react';
import Document, { DocumentInitialProps, Html, Head, Main, NextScript, DocumentContext } from 'next/document';

export default function DocumentRender() {
  return (
    <Html>
      <Head>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

DocumentRender.getInitialProps = async (context: DocumentContext) => {
  const originalRenderPage = context.renderPage;

  // Run the React rendering logic synchronously
  context.renderPage = () =>
    originalRenderPage({
      // Useful for wrapping the whole react tree
      enhanceApp: (App) => App,
      // Useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component,
    })

  // Run the parent `getInitialProps`, it now includes the custom `renderPage`
  const initialProps:DocumentInitialProps = await Document.getInitialProps(context);

  return initialProps
}