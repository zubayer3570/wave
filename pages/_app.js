import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
