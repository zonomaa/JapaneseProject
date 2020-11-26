import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { Global, css } from '@emotion/core';
const GlobalStyle = (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      html,
      body,
      button {
        font-family: 'Roboto';
      }

      body {
        margin: 0;
      }
    `}
  />
);

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>{GlobalStyle}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
