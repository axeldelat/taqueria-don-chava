import Head from 'next/head'
import Image from 'next/image'

// Sends a conversion event to GTM (dataLayer), GA4 (gtag) and Meta (fbq)
function trackEvent(eventName) {
  if (typeof window === 'undefined') return

  // Google Tag Manager dataLayer
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: eventName })

  // GA4 direct (in case gtag is present)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName)
  }

  // Meta Pixel direct (in case fbq is present)
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName)
  }
}

export default function Home() {
  return (
    <div className="p-0 min-h-[100svh] bg-[#fafafa]">
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Taquería Don Chava — sucursales en Playa del Carmen" />
        <link rel="icon" href="https://axt.s3.amazonaws.com/donchava/favicon.ico" />
        {/* Preload LCP image for faster discovery */}
        <link
          rel="preload"
          as="image"
          href="/logo-donchava.png"
          fetchPriority="high"
        />
      </Head>

      <main className="flex min-h-[100svh] flex-1 flex-col items-center justify-center px-0 py-0">
        <Image
          src="/logo-donchava.png"
          alt="Don Chava"
          height={200}
          width={200}
          priority
          quality={85}
        />

        {/* Cards aligned wrapper */}
        <div className="w-full max-w-[900px] px-4 mb-8 sm:mb-12">

          <div className="flex w-full flex-col gap-6 sm:flex-row">

            {/* Sucursal 28 de julio */}
            <div className="flex flex-1 min-w-[280px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg text-left text-[#CE122E]">
              <div className="relative w-[160px] shrink-0">
                <Image
                  src="/28dejulio.png"
                  alt="Sucursal 28 de julio"
                  fill
                  sizes="160px"
                  quality={75}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-4">
                <h2 className="mb-2 text-xl font-semibold text-[#CE122E]">{'Suc. Mundo Habitatt \u2192'}</h2>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#CE122E]">Lun – Sáb:</span> 4:30 p.m.–12 a.m.<br />
                  <span className="font-semibold text-gray-400">Domingo:</span> <span className="italic text-gray-400">Cerrado</span>
                </p>

                {/* Primary CTA — Ordenar en Línea */}
                <a
                  href="https://taqueria-don-chava.geniusresto.menu/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('orderOnline28')}
                  className="mt-4 block w-full"
                >
                  <button className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2">
                    Ordenar en Línea
                  </button>
                </a>

                {/* Secondary CTA — Como Llegar */}
                <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('map28')} className="mt-2 block w-full">
                  <button className="w-full cursor-pointer rounded-full border border-[#CE122E]/40 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#CE122E] transition-colors hover:border-[#CE122E] hover:bg-[#CE122E]/5 active:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2">
                    Cómo Llegar
                  </button>
                </a>
              </div>
            </div>

            {/* Sucursal CTM */}
            <div className="flex flex-1 min-w-[280px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg text-left text-[#CE122E]">
              <div className="relative w-[160px] shrink-0">
                <Image
                  src="/ctm.png"
                  alt="Sucursal CTM"
                  fill
                  sizes="160px"
                  quality={75}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-4">
                <h2 className="mb-2 text-xl font-semibold text-[#CE122E]">{'Suc. CTM \u2192'}</h2>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#CE122E]">Lun – Sáb:</span> 4:30 p.m.–12 a.m.<br />
                  <span className="font-semibold text-gray-400">Domingo:</span> <span className="italic text-gray-400">Cerrado</span>
                </p>

                {/* Primary CTA — Ordenar en Línea */}
                <a
                  href="https://taqueria-don-chava-suc-ctm.ola.click/products"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('orderOnlineCtm')}
                  className="mt-4 block w-full"
                >
                  <button className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2">
                    Ordenar en Línea
                  </button>
                </a>

                {/* Secondary CTA — Como Llegar */}
                <a href="https://goo.gl/maps/zVaBLqMwWZbaJjHt8" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('mapCtm')} className="mt-2 block w-full">
                  <button className="w-full cursor-pointer rounded-full border border-[#CE122E]/40 bg-transparent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#CE122E] transition-colors hover:border-[#CE122E] hover:bg-[#CE122E]/5 active:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2">
                    Cómo Llegar
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="flex flex-1 items-center justify-center border-t border-[#eaeaea] bg-[rgb(28,24,22)] px-0 py-8 text-white">
        <a
          href="https://www.markerante.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-grow items-center justify-center"
        >
          Powered by{' '}
          <span className="ml-2 inline-flex h-[1em] items-center">
            <Image
              src="/markerante.svg"
              alt="Markerante"
              height={40}
              width={40}
              loading="lazy"
              className="block h-[1.25em] w-auto"
            />
          </span>
        </a>
      </footer>

    </div>
  )
}
