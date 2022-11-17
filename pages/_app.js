import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
      </Head> */}
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
