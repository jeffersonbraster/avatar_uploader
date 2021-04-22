import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import '../styles/global.scss'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Avatar upload</title>

        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project startaer to work with Typescript, React, nextjs, react-easy-crop "
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
