import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import colors from '../styles/colors'
import { ParallaxProvider } from 'react-scroll-parallax'
import Head from 'next/head'

const theme = {
  colors
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>
      <ParallaxProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  )
}