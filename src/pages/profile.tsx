import Head from 'next/head'
import { useUser } from '../hooks/useUser'
import ItemsList from '../components/ItemsList'


export default function Profile() {
    const { user } = useUser()

    return (
        <div className=''>
            <Head>
                <title>Perfil</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <h1 className='text-4xl'>{`${user?.name.firstName} ${user?.name.lastName}`}</h1>
                <ItemsList title='Mis publicaciones' limit={5} orientation='vertical' />
            </main>
        </div>
    )
}
