import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, globalCss } from '~stitches';

const global = globalCss({
  body: {
    margin: 0,
    padding: 0,
    background: '$gray1000',
    fontFamily: '$sans'
  },
  '*': {
    boxSizing: 'border-box'
  }
});

export default function Document() {
  global();
  return (
    <Html lang="en">
      <Head>
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
