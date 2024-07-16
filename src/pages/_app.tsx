import type { AppProps } from 'next/app'
import { satoshi } from '../lib/fonts'  // Adjust the import path as necessary
import '../styles/globals.css'  // Adjust the path if necessary

export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={`${satoshi.variable}`}>
        <Component {...pageProps} />
      </main>
  )
}
