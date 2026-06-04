import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-0 min-h-[100svh] bg-[#fafafa]">
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Taquería Don Chava — sucursales en Playa del Carmen" />
        <link rel="icon" href="https://axt.s3.amazonaws.com/donchava/favicon.ico" />
      </Head>

      <main className="flex min-h-[100svh] flex-1 flex-col items-center justify-center px-0 py-16">
        <Image
          src="/logo-donchava.png"
          alt="Don Chava"
          height={200}
          width={200}
        />

        <p className="my-4 text-center text-2xl leading-relaxed text-[rgb(196,24,20)]">
          Selecciona una sucursal
        </p>

        <div className="flex flex-wrap items-stretch justify-center max-w-[900px] gap-6 px-4 sm:flex-col md:flex-row">
          {/* Sucursal 28 de julio */}
          <div className="flex max-w-[420px] overflow-hidden rounded-[10px] border border-[#fe5858] bg-white/95 text-left text-[rgb(196,24,20)] transition-colors duration-150 ease-in hover:text-[rgb(164,20,18)]">
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
              <p className="text-sm leading-relaxed">Av. 28 de Julio, Blvd. de Las Americas esq, Mundo Habitat, 77714 Playa del Carmen, Q.R.</p>
              <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer">
                <button className="mt-3 w-full cursor-pointer rounded border-none bg-[#df733c] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">Como Llegar</button>
              </a>
              <a href="https://www.taqueriadonchavamundohabittat.com/" target="_blank" rel="noopener noreferrer">
                <button className="mt-2 w-full cursor-pointer rounded border-none bg-[#df733c] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">Ordena en Linea</button>
              </a>
            </div>
          </div>

          {/* Sucursal CTM */}
          <div className="flex max-w-[420px] overflow-hidden rounded-[10px] border border-[#fe5858] bg-white/95 text-left text-[rgb(196,24,20)] transition-colors duration-150 ease-in hover:text-[rgb(164,20,18)]">
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
              <p className="text-sm leading-relaxed">Entre avenida 115 y avenida 125, Frente a Nuevo H. Ayuntamiento, 77711 Q.R.</p>
              <a href="https://goo.gl/maps/zVaBLqMwWZbaJjHt8" target="_blank" rel="noopener noreferrer">
                <button className="mt-3 w-full cursor-pointer rounded border-none bg-[#df733c] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">Como Llegar</button>
              </a>
              <a href="https://www.taqueriadonchavactm.com/" target="_blank" rel="noopener noreferrer">
                <button className="mt-2 w-full cursor-pointer rounded border-none bg-[#df733c] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white">Ordena en Linea</button>
              </a>
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
    </div>
  )
}
