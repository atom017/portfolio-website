import "@/styles/globals.css";
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Khaing Hsu Thwe</title>
        <link rel="icon" href="/name/white.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
