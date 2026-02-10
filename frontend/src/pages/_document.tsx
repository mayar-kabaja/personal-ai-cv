import { Html, Head, Main, NextScript } from 'next/document';

// Inline favicon as data URI so it loads with first HTML (fixes Chrome tab icon)
const FAVICON_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><linearGradient id="g" x1="0" y1="0" x2="32" y2="32"><stop stop-color="#4f8eff"/><stop offset="1" stop-color="#8b5cf6"/></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#g)"/><text x="16" y="22" font-size="18" font-weight="700" fill="white" text-anchor="middle" font-family="system-ui,sans-serif">M</text></svg>'
  );

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href={FAVICON_SVG} />
        <link rel="shortcut icon" type="image/svg+xml" href={FAVICON_SVG} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
