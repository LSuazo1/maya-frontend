import Head from 'next/head'
import { useUser } from '../hooks/useUser'
import ItemsList from '../components/ItemsList'
import Link from 'next/link'
import { IconDashboard, IconTag } from '@tabler/icons'


export default function Profile() {
    const { user } = useUser()

    return (
        <div className=''>
            <Head>
                <title>Perfil</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <div className='grid grid-flow-col auto-cols-auto'>
                <div className='w-[300px] p-8 left-0 z-1 bg-white'>
                    <ul>
                        <li className='_ix0f'>
                            <Link href="/create" className='justify-center bg-[#4441EB] text-white'>Crear publicación</Link>
                        </li>
                        <li className='_ix0f'>
                            <Link href="/selling">
                                <IconTag stroke={1.8} size="1.8rem" />
                                Tus publicaciones
                            </Link>
                        </li>
                        <li className='_ix0f'>
                            <Link href="/dashboard">
                                <IconDashboard stroke={1.8} size="1.8rem" />
                                Panel para vendedores
                            </Link>
                        </li>
                    </ul>
                </div>
                <main className='w-full'>
                    <ItemsList title='Mis publicaciones' limit={5} orientation='vertical' className='!grid-cols-3' />
                </main>
            </div>
        </div>
    )
}
