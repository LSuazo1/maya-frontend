import Link from 'next/link'
import useLang from '../hooks/useLang'
import Logo from './Logo'
import SearchInput from './SearchInput'
import Inbox from './Inbox'
import Avatar from './Avatar'
import CategoryList from './CategoryList'
import { IInboxItemProps } from '../interfaces/interfaces'
import { useUser } from '../hooks/useUser'


export default function Header() {
    const messages: IInboxItemProps[] = [
        {
            id: 1,
            title: 'Message 1',
            href: '/1',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'message',
            created_at: '2022-11-01 14:00:00'
        },
        {
            id: 2,
            title: 'Message 2',
            href: '/2',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'message',
            created_at: '2022-10-01 12:00:00'
        },
        {
            id: 3,
            title: 'Message 3',
            href: '/3',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'message',
            created_at: '2022-09-01 10:00:00'
        },
        {
            id: 4,
            title: 'Message 4',
            href: '/4',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'message',
            created_at: '2022-08-01 08:00:00'
        },
        {
            id: 5,
            title: 'Message 5',
            href: '/5',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            type: 'message',
            created_at: '2022-07-01 06:00:00'
        }
    ]
    const notifications: IInboxItemProps[] = [
        {
            id: 1,
            title: 'Notificacion 1',
            href: '/1',
            message: 'Mensaje de la notificacion 1',
            type: 'notification',
            created_at: '2022-11-01 14:00:00'
        },
        {
            id: 2,
            title: 'Notificacion 2',
            href: '/2',
            message: 'Mensaje de la notificacion 2',
            type: 'notification',
            created_at: '2022-10-01 12:00:00'
        },
        {
            id: 3,
            title: 'Notificacion 3',
            href: '/3',
            message: 'Mensaje de la notificacion 3',
            type: 'notification',
            created_at: '2022-09-01 10:00:00'
        },
        {
            id: 4,
            title: 'Notificacion 4',
            href: '/4',
            message: 'Mensaje de la notificacion 4',
            type: 'notification',
            created_at: '2022-08-01 08:00:00'
        },
        {
            id: 5,
            title: 'Notificacion 5',
            href: '/5',
            message: 'Mensaje de la notificacion 5',
            type: 'notification',
            created_at: '2022-07-01 06:00:00'
        },
        {
            id: 5,
            title: 'Notificacion 5',
            href: '/5',
            message: 'Mensaje de la notificacion 5',
            type: 'notification',
            created_at: '2022-07-01 06:00:00'
        },
        {
            id: 5,
            title: 'Notificacion 5',
            href: '/5',
            message: 'Mensaje de la notificacion 5',
            type: 'notification',
            created_at: '2022-07-01 06:00:00'
        }
    ]
    const { user } = useUser()

    return (
        <header className='flex inset-x-0 items-center bg-white border-b py-2 px-12 text-base select-none'>
            <div className='w-1/2'>
                <Logo />
            </div>
            <div className='w-full'>
                <SearchInput />
            </div>
            <div className='w-full flex justify-end'>
                <nav>
                    <ul className='flex items-center gap-6 focus:outline-none focus:text-gray-900'>
                        <li>
                            <Link href="/">Inicio</Link>
                        </li>
                        <li>
                            <CategoryList />
                        </li>
                        {
                            !user ? (
                                <>
                                    <li>
                                        <Link href="/signin">Iniciar sesión</Link>
                                    </li>
                                    <li>
                                        <Link href="/signup">Registrarse</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link href="/selling">Venta</Link>
                                    </li>
                                    <li>
                                        <Inbox type='message' data={messages} />
                                    </li>
                                    <li>
                                        <Inbox type='notification' data={notifications} />
                                    </li>
                                    <li>
                                        <Avatar />
                                    </li>
                                </>
                            )
                        }
                        {/* <li>
                            <Lang />
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
