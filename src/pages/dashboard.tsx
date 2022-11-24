import Head from 'next/head'
import ItemsList from '../components/ItemsList'
import { useUser } from '../hooks/useUser'


export default function Dashboard() {
    const { user, mutate } = useUser()
    
    return (
        <div className=''>
            <Head>
                <title>Inicio</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <ItemsList title='Sugerencia del dia' limit={10} className='overflow-x-scroll' />
                <ItemsList category='apparel' title='Ropa' limit={10} className='overflow-x-scroll' />
                <ItemsList category='cellphones' title='Celulares' limit={10} className='overflow-x-scroll' />
                <ItemsList category='computers' title='Computadoras' limit={10} className='overflow-x-scroll' />
            </main>
        </div>
    )
}
