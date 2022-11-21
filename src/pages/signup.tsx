import Head from 'next/head'
import Input from '../components/Input'
import { IconDeviceMobile, IconMail, IconPassword, IconUser } from '@tabler/icons'

export default function SignUp() {
    return (
        <div className=''>
            <Head>
                <title>Crear una cuenta | Maya</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <div className='w-[500px] bg-white p-12' >
                    <h1 className='text-4xl font-semibold my-12'>Crear una cuenta</h1>
                    <form method='post' className='grid gap-5'>
                        <div className="flex gap-4">
                            <Input name='text' label='Nombre:' Icon={IconUser} placeholder='John' />
                            <Input name='text' label='Apellido:' Icon={IconUser} placeholder='Doe' />
                        </div>
                        <Input name='email' label='Número de teléfono:' Icon={IconDeviceMobile} placeholder='+504 8888-4444' />
                        <Input name='email' label='Correo electrónico:' Icon={IconMail} placeholder='ejemplo@correo.com' />
                        <Input type='password' name='password' label='Contraseña:' Icon={IconPassword} placeholder='•••••••••••••' />
                        <Input type='password' name='password' label='Confirmar contraseña:' Icon={IconPassword} placeholder='•••••••••••••' />

                        <div className='relative rounded-md my-2 shadow-sm text-[#666666]'>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value='Crear cuenta'
                                className='block w-full rounded-md bg-[#4441EB] text-white hover:bg-[#4c49f3] focus:bg-[#3c3ad2] cursor-pointer outline-none mt-4 py-4'
                                placeholder='0.00'
                            />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

