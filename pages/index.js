import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const PROMO_CODE = 'PRIMERA-COMPRA'

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

function PromoCta() {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function handleCopy() {
    try {
      await copyToClipboard(PROMO_CODE)
      setCopied(true)
      trackEvent('copyPromoCode')
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2200)
    } catch {
      // Clipboard blocked — the code stays on screen and selectable
    }
  }

  return (
    <div className="w-full max-w-[900px] px-4 mb-6 sm:mb-8">
      <div className="flex flex-col gap-5 rounded-xl bg-[#CE122E] p-5 text-left text-white shadow-md sm:flex-row sm:items-center sm:gap-7 sm:p-6">

        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
            Nuevo sistema de pedidos
          </p>
          <h2 className="mt-2 text-lg font-bold leading-snug sm:text-xl">
            Haz tu primer pedido a domicilio o pickup y empieza a ganar puntos
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-white/85">
            Ya puedes seguir tu pedido en tiempo real, usar códigos de promoción y acumular puntos en nuestro sistema de lealtad.
          </p>
        </div>

        {/* Cupón */}
        <div className="w-full shrink-0 rounded-lg border-2 border-dashed border-white/45 bg-white/10 p-4 text-center sm:w-[248px]">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/80">
            10% de descuento
          </p>
          <p className="mt-1.5 select-all font-mono text-base font-extrabold tracking-[0.08em] sm:text-lg">
            {PROMO_CODE}
          </p>
          <button
            type="button"
            onClick={handleCopy}
            aria-label={`Copiar código de descuento ${PROMO_CODE}`}
            className="mt-3 w-full cursor-pointer rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#CE122E] transition-colors hover:bg-white/90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
          >
            <span aria-live="polite">{copied ? '¡Copiado!' : 'Copiar código'}</span>
          </button>
          <p className="mt-2 text-[10px] leading-tight text-white/70">
            Válido en tu primer pedido
          </p>
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
