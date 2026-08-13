import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Favicons / App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#CE122E" />

        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="9wubgwmt92llyn2sumzusx87pqjc8a" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Taquería Don Chava" />
        <meta property="og:title" content="Taquería Don Chava" />
        <meta property="og:description" content="Una vida taqueando." />
        <meta property="og:url" content="https://www.taqueriadonchava.mx/" />
        <meta property="og:image" content="https://www.taqueriadonchava.mx/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="es_MX" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Taquería Don Chava" />
        <meta name="twitter:description" content="Una vida taqueando." />
        <meta name="twitter:image" content="https://www.taqueriadonchava.mx/og-image.jpg" />

        {/* GA4 lives in _app.js via <GoogleAnalytics>. The GTM container was
            removed: it held a single tag for this same measurement ID, so it
            shipped 344 KB to duplicate what gtag already does. */}

        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '584873826523126');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=584873826523126&ev=PageView&noscript=1" />`,
          }}
        />
        {/* End Meta Pixel */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
