import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* Add description */}
        <meta
          name="description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        {/* Add favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Add meta viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add meta theme-color */}
        <meta name="theme-color" content="#000000" />
        {/* Add meta og:title */}
        <meta property="og:title" content="Pradyumna D" />
        {/* Add meta og:description */}
        <meta 
          property="og:description"
          content="Portfolio of Pradyumna D, a Full Stack Developer"
        />
        {/* Add meta og:url */}
        <meta property="og:url" content="https://pradyumnad.vercel.app" />
        {/* Add meta og:type */}
        <meta property="og:type" content="website" />
        {/* Add meta twitter:card */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
