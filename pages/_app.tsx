import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  )
}
