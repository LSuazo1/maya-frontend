import '../styles/globals.css'
import { SWRConfig } from 'swr'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IBM_Plex_Sans, Inter } from '@next/font/google'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const ibmPlexSans = IBM_Plex_Sans({
    weight: ['500', '600'],
    subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
            <div className={`framer bg-[#F6F6F6] text-[#111111] ${ibmPlexSans.className}`}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <section className='header w-full sticky top-0 z-10'>
                    <Header />
                </section>

                <section className='main'>
                    <Component {...pageProps} />
                </section>

                <section className='footer'>
                    <Footer />
                </section>
            </div>
        </SWRConfig>
    )
}
