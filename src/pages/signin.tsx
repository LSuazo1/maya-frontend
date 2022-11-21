import Head from 'next/head'
import Input from '../components/Input'
import { IconMail, IconPassword } from '@tabler/icons'

export default function SignIn() {
    return (
        <div className=''>
            <Head>
                <title>Iniciar sesión | Maya</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <div className='w-[500px] bg-white p-12' >
                    <h1 className='text-4xl font-semibold my-12'>Iniciar sesión</h1>
                    <form method='post' className='grid gap-5'>
                        <Input name='email' label='Correo electrónico:' Icon={IconMail} placeholder='ejemplo@correo.com' />
                        <Input type='password' name='password' label='Contraseña:' Icon={IconPassword} placeholder='•••••••••••••' />
                        
                        <div className='relative rounded-md my-2 shadow-sm text-[#666666]'>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value='Iniciar sesión'
                                className='block w-full rounded-md bg-[#4441EB] text-white hover:bg-[#4c49f3] focus:bg-[#3c3ad2] cursor-pointer outline-none mt-8 py-4 px-12'
                                placeholder='0.00'
                            />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
