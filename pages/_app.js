import '../styles/globals.css'
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <CSSReset></CSSReset>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
