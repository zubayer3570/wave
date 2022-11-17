import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
