import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { sendGAEvent } from '@next/third-parties/google'

// Shown in this order. `expiresAt` is the first instant the code stops
// working (Cancún time, UTC-5); past it the card hides itself.
const PROMOS = [
  {
    code: 'PASTOR-FANATICO',
    name: 'Adictos al pastor',
    discount: '$70 de descuento',
    terms: 'En kilo de pastor y medio kilo de asada · Un uso por cliente · Hasta el 31 oct',
    event: 'copyPromoPastorFanatico',
    expiresAt: '2026-11-01T00:00:00-05:00',
  },
  {
    code: 'PRIMERA-COMPRA',
    name: 'Primera compra',
    discount: '10% de descuento',
    terms: 'Solo en tu primera compra · Compra mínima de $500',
    event: 'copyPromoPrimeraCompra',
  },
]

const ALL_CODES = PROMOS.map((promo) => promo.code).join(',')

function isActive(promo, now) {
  return !promo.expiresAt || now < new Date(promo.expiresAt)
}

// Expiry has no change event to listen to; it is re-read on each render
function noopSubscribe() {
  return () => {}
}

// Sends a conversion event to GA4 and Meta (fbq)
function trackEvent(eventName) {
  if (typeof window === 'undefined') return

  // Queues onto the dataLayer, so it survives clicks that land before
  // gtag.js has finished loading
  sendGAEvent('event', eventName)

  // Meta Pixel direct (in case fbq is present)
  if (typeof window.fbq === 'function') {
    window.fbq('trackCustom', eventName)
  }
}

// Legacy copy path: some mobile browsers expose the Clipboard API but reject
// writeText (restricted permissions, non-secure context), so this stays as a
// fallback for both the "missing" and the "present but rejected" cases.
function legacyCopy(text) {
  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(field)
  if (!ok) throw new Error('copy command rejected')
}

async function copyToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // Fall through to the legacy path below
    }
  }
  legacyCopy(text)
}

function PromoCoupon({ promo }) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function handleCopy() {
    try {
      await copyToClipboard(promo.code)
      setCopied(true)
      trackEvent(promo.event)
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard blocked — the code stays on screen and selectable
    }
  }

  return (
    <div className="flex flex-col rounded-lg border-2 border-dashed border-white/45 bg-white/10 p-4 text-center">
      <p className="text-sm font-bold leading-tight">{promo.name}</p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
        {promo.discount}
      </p>
      <p className="mt-1.5 select-all font-mono text-base font-extrabold tracking-[0.08em] sm:text-lg">
        {promo.code}
      </p>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copiar código de descuento ${promo.code}`}
        className="mt-3 w-full cursor-pointer rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#CE122E] transition-colors hover:bg-white/90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      >
        <span aria-live="polite">{copied ? '¡Copiado!' : 'Copiar código'}</span>
      </button>
      <p className="mt-2 text-[10px] leading-tight text-white/70">
        {promo.terms}
      </p>
    </div>
  )
}

function PromoCta() {
  // The page is statically built, so expiry is checked in the browser; the
  // prerendered HTML (server snapshot) lists every promo.
  const activeCodes = useSyncExternalStore(
    noopSubscribe,
    () => PROMOS.filter((promo) => isActive(promo, new Date())).map((p) => p.code).join(','),
    () => ALL_CODES,
  )
  const promos = PROMOS.filter((promo) => activeCodes.split(',').includes(promo.code))

  if (promos.length === 0) return null

  return (
    <div className="w-full max-w-[900px] px-4 mb-6 sm:mb-8">
      <div className="rounded-xl bg-[#CE122E] p-5 text-left text-white shadow-md sm:p-6">

        <h2 className="text-lg font-bold leading-snug sm:text-xl">
          Pide a domicilio o pickup, ahorra con nuestros cupones y gana puntos
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-white/85">
          Ya puedes seguir tu pedido en tiempo real, usar códigos de promoción y acumular puntos en nuestro sistema de lealtad.
        </p>

        <div className={`mt-5 grid gap-4 ${promos.length > 1 ? 'sm:grid-cols-2' : 'sm:max-w-[320px]'}`}>
          {promos.map((promo) => (
            <PromoCoupon key={promo.code} promo={promo} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="p-0 min-h-[100svh] bg-[#fafafa]">
      <Head>
        <title>Taquería Don Chava - Tacos Tradicionales de pastor, arrachera y rib eye en Playa del Carmen</title>
        <meta name="description" content="Taquería Don Chava — sucursales en Playa del Carmen" />
        {/* The logo <Image> below carries `priority`, which emits its own
            preload for the optimized asset — a manual one would fetch the
            raw PNG that next/image never serves. */}
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

        <PromoCta />

        {/* Cards aligned wrapper */}
        <div className="w-full max-w-[900px] px-4 mb-8 sm:mb-12">

          <div className="flex w-full flex-col gap-6 sm:flex-row">

            {/* Sucursal 28 de julio */}
            <div className="flex flex-1 min-w-[280px] overflow-hidden rounded-xl bg-white shadow-md transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-lg focus-within:shadow-lg text-left text-[#CE122E]">
              <div className="relative w-[160px] shrink-0">
                <Image
                  src="/28dejulio.jpg"
                  alt="Sucursal Mundo Habitatt"
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
                  src="/ctm.jpg"
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
                  href="https://taqueria-don-chava-suc-ctm.geniusresto.menu/products"
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
