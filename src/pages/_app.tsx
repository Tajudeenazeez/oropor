import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/Layout'
import theme from '../chakra/theme/theme'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
       <ChakraProvider theme={theme}>
        <Layout>
         <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>

  )
  
}
