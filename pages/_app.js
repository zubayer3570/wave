import Head from 'next/head'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js"></Script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
