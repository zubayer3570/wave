import Script from 'next/script'
import '../styles/globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
