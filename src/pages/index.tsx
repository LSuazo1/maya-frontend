import Head from 'next/head'
import ItemsList from '../components/ItemsList'
import { useUser } from '../hooks/useUser'


export default function Home() {
    const { user } = useUser()

    return (
        <div className=''>
            <Head>
                <title>Inicio</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                {
                    !user ? (
                        <>
                            <div className='w-full py-8'>
                                <h1 className='font-bold leading-tight text-8xl'>
                                    Bienvenido al
                                    <br />
                                    Marketplace
                                </h1>
                            </div>
                            <ItemsList title='Sugerencia del dia' limit={10} />
                        </>
                    ) : (
                        <>
                            <ItemsList category='apparel' title='Ropa' limit={15} />
                            <ItemsList category='cellphones' title='Celulares' limit={15} />
                            <ItemsList category='computers' title='Computadoras' limit={15} />
                            <ItemsList category='shoes' title='Calzado' limit={15} />
                        </>
                    )
                }
            </main>
        </div>
    )
}
