import { Nunito } from '@next/font/google'
import Script from 'next/script'
import '../styles/globals.css'

const nunito = Nunito({ weight: "400", subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <div className={nunito.className}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
