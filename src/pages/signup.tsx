import Head from 'next/head'
import InputText from '../components/InputText'
import InputSelect from '../components/InputSelect'
import { Listbox, Transition } from '@headlessui/react'
import { signUp } from '../utils/userAPI'
import { IconDeviceMobile, IconMail, IconMapPin, IconPassword, IconUser } from '@tabler/icons'
import { departaments, getProvinces } from '../utils/getLocations'
import React, { Fragment, useState } from 'react'

const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ')


export default function SignUp() {
    const [department, setDepartment] = useState('Atlántida')
    const allProvinces = getProvinces(department)
    const [province, setProvince] = useState(allProvinces[0])
    const [checkedTerms, setCheckedTerms] = useState(true)

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { firstName, lastName, email, password, phoneNumber } = e.target
        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value as string,
            phone: phoneNumber.value as string,
            province: province as string,
            department: department,
        }
        const response = await signUp(userData)
    }

    return (
        <div className=''>
            <Head>
                <title>Crear una cuenta</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <main>
                <div className='w-[500px] bg-white p-12' >
                    <h1 className='text-4xl font-semibold my-12'>Crear una cuenta</h1>
                    <form method='post' className='grid gap-5' onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <InputText name='firstName' label='Nombre:' Icon={IconUser} placeholder='John' />
                            <InputText name='lastName' label='Apellido:' Icon={IconUser} placeholder='Doe' />
                        </div>
                        <InputText name='phoneNumber' label='Número de teléfono:' Icon={IconDeviceMobile} placeholder='+504 8888-4444' />
                        <InputText name='email' label='Correo electrónico:' Icon={IconMail} placeholder='ejemplo@correo.com' />
                        <InputText type='password' name='password' label='Contraseña:' Icon={IconPassword} placeholder='•••••••••••••' />
                        <InputText type='password' name='confirmPassword' label='Confirmar contraseña:' Icon={IconPassword} placeholder='•••••••••••••' />
                        {/* <InputSelect Icon={IconMapPin} items={departaments} label='Departamento:' />
                        <InputSelect Icon={IconMapPin} items={getProvinces(departament)} label='Municipio:' /> */}


                        <>
                            <Listbox value={department} onChange={setDepartment}>
                                {({ open }) => (
                                    <>
                                        <div className="relative">
                                            {
                                                <div className="label mb-2">
                                                    <label className='block text-base font-bold text-gray-700'>Departamentos:</label>
                                                </div>
                                            }
                                            <Listbox.Button className="flex w-full cursor-default rounded-md py-3 px-4 text-left shadow-sm bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                                                {
                                                    <label className='mr-4 text-[#666666]'>
                                                        <IconMapPin size='1.4rem' stroke={2} aria-hidden="true" />
                                                    </label>
                                                }
                                                {department}
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {departaments.map((item: any) => (
                                                        <Listbox.Option
                                                            key={item}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={item}
                                                        >
                                                            <div className="flex items-center">
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </>
                        <>
                            <Listbox value={province} onChange={setProvince}>
                                {({ open }) => (
                                    <>
                                        <div className="relative">
                                            {
                                                <div className="label mb-2">
                                                    <label className='block text-base font-bold text-gray-700'>Municipios:</label>
                                                </div>
                                            }
                                            <Listbox.Button className="flex w-full cursor-default rounded-md py-3 px-4 text-left shadow-sm bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                                                {
                                                    <label className='mr-4 text-[#666666]'>
                                                        <IconMapPin size='1.4rem' stroke={2} aria-hidden="true" />
                                                    </label>
                                                }
                                                {province}
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    {allProvinces.map((item: any) => (
                                                        <Listbox.Option
                                                            key={item}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={item}
                                                        >
                                                            <div className="flex items-center">
                                                                <span>
                                                                    {item}
                                                                </span>
                                                            </div>
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                        </>


                        <div className='text-center'>
                            <input name='isChecked' type='checkbox' onChange={() => setCheckedTerms(!checkedTerms)} />
                            <label htmlFor='isChecked'>
                                <span className="text-center mx-3 text-gray-800 hover:cursor-pointer hover:text-indigo-800" >
                                    Revisa y acepta nuestros términos y condiciones
                                </span>
                            </label>
                        </div>
                        <div className='relative rounded-md my-2 shadow-sm text-[#666666]'>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value='Crear cuenta'
                                disabled={checkedTerms}
                                className='block w-full rounded-md bg-[#4441EB] text-white hover:bg-[#4c49f3] focus:bg-[#3c3ad2] cursor-pointer outline-none mt-4 py-4'
                            />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

