import Head from 'next/head'
import Input from '../components/InputText'
import { IconMail, IconPassword } from '@tabler/icons'
import React, { useEffect } from 'react'
import { useUser } from '../hooks/useUser'
import Router from 'next/router'
import { login } from '../utils/userAPI'


export default function SignIn() {
    const { loggedIn, mutate } = useUser()
    useEffect(() => {
        if (loggedIn) Router.replace('/')
    }, [loggedIn])

    if (loggedIn) return <> Redirecting.... </>

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault() // don't redirect the page
        const { email, password } = e.target
        const userData = await login(email.value, password.value)
        mutate(userData, { revalidate: false })
    }

    return (
        <div>
            <Head>
                <title>Iniciar sesión</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <div className='w-[500px] bg-white p-12' >
                    <h1 className='text-4xl font-semibold my-12'>Iniciar sesión</h1>
                    <form method='post' className='grid gap-5' onSubmit={handleSubmit}>
                        <Input type='email' name='email' label='Correo electrónico:' Icon={IconMail} placeholder='ejemplo@correo.com' focus={true} />
                        <Input  type='password' name='password' label='Contraseña:' Icon={IconPassword} placeholder='•••••••••••••'  />

                        <div className='relative rounded-md my-2 shadow-sm text-[#666666]'>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value='Iniciar sesión'
                                className='block w-full rounded-md bg-[#4441EB] text-white hover:bg-[#4c49f3] focus:bg-[#3c3ad2] cursor-pointer outline-none mt-8 py-4 px-12'
                            />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
