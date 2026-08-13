import '../styles/globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

export const GA_MEASUREMENT_ID = 'G-G9YX8E559E'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </>
  )
}

export default MyApp
