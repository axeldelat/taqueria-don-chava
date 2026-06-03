import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      className="p-0"
      style={{
        backgroundImage: "url('https://axt.s3.amazonaws.com/donchava/bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Taquería Don Chava — sucursales en Playa del Carmen" />
        <link rel="icon" href="https://axt.s3.amazonaws.com/donchava/favicon.ico" />
      </Head>

      <main className="flex min-h-[90vh] flex-1 flex-col items-center justify-center bg-black/50 px-0 py-16">
        <Image
          src="https://axt.s3.amazonaws.com/donchava/logo.png"
          alt="Don Chava"
          height={40}
          width={102}
        />

        <p className="my-4 text-center text-2xl leading-relaxed text-white">
          Selecciona una sucursal
        </p>

        <div className="flex flex-wrap items-center justify-center max-w-[800px] sm:flex-col md:flex-row">
          <div className="m-4 max-w-[300px] rounded-[10px] border border-[#fe5858] bg-white/95 p-6 text-left text-[rgb(196,24,20)] transition-colors duration-150 ease-in hover:text-[rgb(164,20,18)]">
            <h2 className="mb-4 text-2xl font-semibold">{'Suc. 28 de julio \u2192'}</h2>
            <p className="text-xl leading-relaxed">Av. 28 de Julio, Blvd. de Las Americas esq, Mundo Hábitat, 77714 Playa del Carmen, Q.R.</p>
            <a href="https://goo.gl/maps/mGrrjE38A9BR8otB7" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-full cursor-pointer rounded border-none bg-[#df733c] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-white">Cómo Llegar</button>
            </a>
            <a href="https://www.taqueriadonchavamundohabittat.com/" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-full cursor-pointer rounded border-none bg-[#df733c] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-white">Ordena en Línea</button>
            </a>
          </div>

          <div className="m-4 max-w-[300px] rounded-[10px] border border-[#fe5858] bg-white/95 p-6 text-left text-[rgb(196,24,20)] transition-colors duration-150 ease-in hover:text-[rgb(164,20,18)]">
            <h2 className="mb-4 text-2xl font-semibold">{'Suc. CTM \u2192'}</h2>
            <p className="text-xl leading-relaxed">Entre avenida 115 y avenida 125, Frente a Nuevo H. Ayuntamiento,<br /> 77711 Q.R.</p>
            <a href="https://goo.gl/maps/zVaBLqMwWZbaJjHt8" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-full cursor-pointer rounded border-none bg-[#df733c] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-white">Cómo Llegar</button>
            </a>
            <a href="https://www.taqueriadonchavactm.com/" target="_blank" rel="noopener noreferrer">
              <button className="mt-4 w-full cursor-pointer rounded border-none bg-[#df733c] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-white">Ordena en Línea</button>
            </a>
          </div>
        </div>
      </main>

      <footer className="flex flex-1 items-center justify-center border-t border-[#eaeaea] bg-white px-0 py-8 text-[#e50f1c]">
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
