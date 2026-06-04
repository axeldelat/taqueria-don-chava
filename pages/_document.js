import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Taquería Don Chava" />
        <meta property="og:title" content="Taquería Don Chava" />
        <meta property="og:description" content="Una vida taqueando." />
        <meta property="og:image" content="https://taqueria-don-chava.vercel.app/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taquería Don Chava" />
        <meta name="twitter:description" content="Una vida taqueando." />
        <meta name="twitter:image" content="https://taqueria-don-chava.vercel.app/og-image.jpg" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G9YX8E559E"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G9YX8E559E');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
