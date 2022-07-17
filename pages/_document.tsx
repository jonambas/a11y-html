import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, globalCss } from '~stitches';

const global = globalCss({
  html: {
    // Required for intersection observer to update correctly
    // when clicking anchor links
    scrollBehavior: 'smooth',
    fontSize: '14px',
    '@md': {
      fontSize: '16px'
    }
  },
  body: {
    margin: 0,
    padding: 0,
    background: '$gray1000',
    fontFamily: '$sans'
  },
  '*': {
    boxSizing: 'border-box'
  },
  'h1,h2,h3,h4,h5,h6,p': {
    color: '$gray900',
    margin: 0
  },
  p: {
    marginBottom: '$6',
    lineHeight: '1.6em'
  },
  '::selection': {
    background: '$purple500',
    color: 'white'
  },
  ul: {
    padding: '0 0 0 $4',
    margin: '0 0 $4 0',
    lineHeight: '1.6em'
  }
});

export default function Document() {
  global();
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
