import Head from 'next/head'
import ItemsList from '../components/ItemsList'


export default function Home() {
    return (
        <div className=''>
            <Head>
                <title>Bienvenido a Maya</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <div className='w-full py-16'>
                    <h1 className='font-bold leading-tight text-8xl'>
                        Bienvenido al
                        <br />
                        Marketplace Maya
                    </h1>
                </div>
                <ItemsList title='Sugerencia del dia' limit={10} className='overflow-x-scroll' />
                <ItemsList category='apparel' title='Ropa' limit={10} className='overflow-x-scroll' />
                <ItemsList category='cellphones' title='Celulares' limit={10} className='overflow-x-scroll' />
                <ItemsList category='computers' title='Computadoras' limit={10} className='overflow-x-scroll' />
            </main>
        </div>
    )
}
