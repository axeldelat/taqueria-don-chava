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

      <main className="flex min-h-[100svh] flex-1 flex-col items-center justify-center px-0 py-16">
        <Image
          src="/logo-donchava.png"
          alt="Don Chava"
          height={200}
          width={200}
        />

        {/* Banner + Cards aligned wrapper */}
        <div className="w-full max-w-[900px] px-4">

          {/* Promo Banner */}
          <div className="mb-6 flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#CE122E] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-lg font-semibold text-white sm:text-xl">
              Recibe una cortesía sorpresa en tu proxima visita
            </p>
            <button
              onClick={() => setShowPromo(true)}
              className="shrink-0 cursor-pointer rounded-full border-2 border-white bg-transparent px-6 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E]"
            >
              Obtener Promo
            </button>
          </div>

        <div className="flex flex-wrap items-stretch justify-center gap-6 sm:flex-col md:flex-row">
          {/* Sucursal 28 de julio */}
          <div className="flex max-w-[420px] overflow-hidden rounded-[10px] border border-[#CE122E] bg-white/95 text-left text-[#CE122E] transition-colors duration-150 ease-in hover:text-[#a50f26]">
            <div className="relative w-[160px] shrink-0">
              <Image
                src="/28dejulio.png"
                alt="Sucursal 28 de julio"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h2 className="mb-2 text-xl font-semibold">{'Suc. 28 de julio \u2192'}</h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-700">
                <span className="font-medium text-[#CE122E]">Lunes a Sábado:</span><br />
                4:30 p.m.–12 a.m.<br />
                <span className="font-medium text-[#CE122E]">Domingo:</span> <span className="italic text-gray-400">Cerrado</span>
              </p>
              <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer" className="mt-3 block w-full">
                <button className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80">Como Llegar</button>
              </a>
              <div className="mt-2 w-full">
                <span className="glf-button" data-glf-cuid="723f63c2-9b29-4153-81d9-6d5d99941211" data-glf-ruid="e0f208ff-19d2-4e53-bb58-7688eeb8e79b">Ordenar en Línea</span>
              </div>
            </div>
          </div>

          {/* Sucursal CTM */}
          <div className="flex max-w-[420px] overflow-hidden rounded-[10px] border border-[#CE122E] bg-white/95 text-left text-[#CE122E] transition-colors duration-150 ease-in hover:text-[#a50f26]">
            <div className="relative w-[160px] shrink-0">
              <Image
                src="/ctm.png"
                alt="Sucursal CTM"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-4">
              <h2 className="mb-2 text-xl font-semibold">{'Suc. CTM \u2192'}</h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-700">
                <span className="font-medium text-[#CE122E]">Lunes a Sábado:</span><br />
                4:30 p.m.–12 a.m.<br />
                <span className="font-medium text-[#CE122E]">Domingo:</span> <span className="italic text-gray-400">Cerrado</span>
              </p>
              <a href="https://goo.gl/maps/zVaBLqMwWZbaJjHt8" target="_blank" rel="noopener noreferrer" className="mt-3 block w-full">
                <button className="w-full cursor-pointer rounded-full border-2 border-[#CE122E] bg-[#CE122E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#CE122E] active:opacity-80">Como Llegar</button>
              </a>
              <div className="mt-2 w-full">
                <span className="glf-button" data-glf-cuid="723f63c2-9b29-4153-81d9-6d5d99941211" data-glf-ruid="944964cf-3ba2-48aa-96b8-03488b380f74">Ordenar en Línea</span>
              </div>
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
