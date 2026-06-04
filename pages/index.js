import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showPromo, setShowPromo] = useState(false)

  return (
    <div className="p-0 min-h-[100svh] bg-[#fafafa]">
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Taquería Don Chava — sucursales en Playa del Carmen" />
        <link rel="icon" href="https://axt.s3.amazonaws.com/donchava/favicon.ico" />
        <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async></script>
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

        {/* Banner + Cards aligned wrapper */}
        <div className="w-full max-w-[900px] px-4 mb-8 sm:mb-12">

          {/* Promo Banner */}
          <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#CE122E] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Recibe una cortesía sorpresa en tu proxima visita
            </p>
            <button
              onClick={() => setShowPromo(true)}
              className="shrink-0 cursor-pointer rounded-full border-2 border-white bg-transparent px-6 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Obtener Promo
            </button>
          </div>

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
                <h2 className="mb-2 text-xl font-semibold text-[#CE122E]">{'Suc. 28 de julio \u2192'}</h2>
                <p className="mt-1 text-xs leading-relaxed text-gray-600">
                  <span className="font-semibold text-[#CE122E]">Lun – Sáb:</span> 4:30 p.m.–12 a.m.<br />
                  <span className="font-semibold text-gray-400">Domingo:</span> <span className="italic text-gray-400">Cerrado</span>
                </p>

                {/* Primary CTA — Ordenar en Línea */}
                <div className="relative mt-4 w-full">
                  <span
                    id="glf-28dejulio"
                    className="glf-button"
                    data-glf-cuid="723f63c2-9b29-4153-81d9-6d5d99941211"
                    data-glf-ruid="e0f208ff-19d2-4e53-bb58-7688eeb8e79b"
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0, overflow: 'hidden' }}
                  />
                  <button
                    onClick={() => document.getElementById('glf-28dejulio')?.click()}
                    className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2"
                  >
                    Ordenar en Línea
                  </button>
                </div>

                {/* Secondary CTA — Como Llegar */}
                <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer" className="mt-2 block w-full">
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
                <div className="relative mt-4 w-full">
                  <span
                    id="glf-ctm"
                    className="glf-button"
                    data-glf-cuid="723f63c2-9b29-4153-81d9-6d5d99941211"
                    data-glf-ruid="944964cf-3ba2-48aa-96b8-03488b380f74"
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0, overflow: 'hidden' }}
                  />
                  <button
                    onClick={() => document.getElementById('glf-ctm')?.click()}
                    className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#CE122E] focus-visible:outline-offset-2"
                  >
                    Ordenar en Línea
                  </button>
                </div>

                {/* Secondary CTA — Como Llegar */}
                <a href="https://goo.gl/maps/zVaBLqMwWZbaJjHt8" target="_blank" rel="noopener noreferrer" className="mt-2 block w-full">
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
              className="block h-[1.25em] w-auto"
            />
          </span>
        </a>
      </footer>

      {/* WhatsApp floating button — fixed left */}
      <a
        href="https://wa.me/529842329296"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#25D366] focus-visible:outline-offset-2"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16.003 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.627 4.627 1.813 6.627L2.667 29.333l6.88-1.787A13.253 13.253 0 0016.003 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.003 2.667zm0 24c-2.093 0-4.147-.56-5.947-1.627l-.427-.253-4.08 1.053 1.08-3.947-.28-.44A10.587 10.587 0 015.333 16c0-5.88 4.787-10.667 10.667-10.667S26.667 10.12 26.667 16 21.88 26.667 16.003 26.667zm5.853-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.227-.187.213-.36.24-.68.08-.32-.16-1.347-.493-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.147-.147.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.253-.613-.52-.533-.72-.547-.187-.013-.4-.013-.613-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.327 1.36.52 1.827.667.76.24 1.453.2 2 .12.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z"/>
        </svg>
      </a>

      {/* Promo Modal */}
      {showPromo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowPromo(false)}
        >
          <div
            className="relative max-h-[90vh] max-w-[600px] overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPromo(false)}
              className="absolute right-2 top-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50 text-xl font-bold text-white hover:bg-black/70"
              aria-label="Cerrar"
            >
              &times;
            </button>
            <Image
              src="/promo-cortesia.png"
              alt="Toma captura de esta imagen y preséntalo en cualquiera de nuestras sucursales para obtener una cortesía"
              width={600}
              height={480}
              className="block h-auto w-full"
            />
          </div>
        </div>
      )}
    </div>
  )
}
