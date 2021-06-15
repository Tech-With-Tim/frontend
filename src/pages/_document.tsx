import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";

// Styled components have trouble rendering all styles in Nextjs
// Solution: https://dev.to/rsanchezp/next-js-and-styled-components-style-loading-issue-3i68
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
