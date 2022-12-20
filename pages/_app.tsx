import Layout from '../components/Layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import React from 'react'
import { RecoilRoot } from 'recoil'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}
