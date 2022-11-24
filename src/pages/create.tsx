import { IconCategory, IconCurrencyDollar, IconEggCracked, IconHash, IconMapPin, IconTag, IconTextCaption, IconTypography } from '@tabler/icons'
import Head from 'next/head'
import React, { ChangeEvent, Fragment, useState } from 'react'
import Input from '../components/InputText'
import Title from '../components/Title'
import { createItem } from '../utils/itemAPI'
import ItemView from '../components/ItemView'
import { departaments, getProvinces } from '../utils/getLocations'
import { Listbox, Transition } from '@headlessui/react'
import { useUser } from '../hooks/useUser'

const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ')


export default function SignIn() {
    const [imagesList, setImagesList] = useState<any | null>()
    const [title, setTitle] = useState('Titulo de la publicación')
    const [description, setDescription] = useState('Descripción de la publicación')
    const [price, setPrice] = useState('Precio')
    const [category, setCategory] = useState('Categoria')
    const [location, setLocation] = useState('Ubicación')
    const [status, setStatus] = useState('Estado')
    const [stock, setStock] = useState('Stock')
    const { user } = useUser()

    const [department, setDepartment] = useState('Atlántida')
    const allProvinces = getProvinces(department)
    const [province, setProvince] = useState(allProvinces[0])

    const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!imagesList) return

        const images = imagesList ? [...imagesList] : [];
        const data = new FormData();
        images.forEach((image, i) => {
            data.append(`images`, image as Blob, image.name);
        });

        const { nameItem, description, category, price, status, stock, location } = e.target
        const itemData = {
            name: nameItem.value,
            idUser: 1,
            stock: stock.value,
            price: price.value,
            date: "11/11/2022",
            state: true,
            availability: status.value,
            category: "electronicos",

            // images: imagesList,
            // description: description.value,
            // department: department,
            // province: province,
        }

        data.append('data', JSON.stringify(itemData));
        await createItem(data)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => setImagesList(e.target.files)

    return (
        <div className=''>
            <Head>
                <title>Crear publicación</title>
                <meta name="description" content="Ecommerce" />
            </Head>

            <div className='flex'>
                <div className='w-[600px] sticky h-screen p-8 left-0 z-1 bg-white overflow-y-scroll'>
                    <Title title='Crear publicación' />
                    <form method='post' className='grid gap-5' encType='multipart/form-data' onSubmit={handleSubmit}>
                        <input type='file' name='images' accept='image/jpg, image/jpeg' onChange={handleFileChange} draggable multiple />
                        <Input type='text' name='nameItem' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} label='Titulo:' Icon={IconTag} placeholder='' focus={true} />
                        <Input type='text' name='price' label='Precio:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} Icon={IconCurrencyDollar} placeholder='' />
                        <Input type='text' name='category' label='Categoría:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} Icon={IconCategory} placeholder='' />
                        <Input type='text' name='status' label='Estado:' Icon={IconEggCracked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)} placeholder='' />
                        <Input type='textarea' name='description' label='Descripción:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} Icon={IconTextCaption} placeholder='' />
                        <Input type='text' name='stock' label='Disponiblidad:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStock(e.target.value)} Icon={IconHash} />

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

                        <div className='relative rounded-md my-2 shadow-sm text-[#666666]'>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value='Publicar'
                                className='block w-full rounded-md bg-[#4441EB] text-white hover:bg-[#4c49f3] focus:bg-[#3c3ad2] cursor-pointer outline-none mt-8 py-4 px-12'
                            />
                        </div>
                    </form>
                </div>
                <main>
                    <ItemView title={title} description={description} price={price} category={category} images={null} location={location} status={status} stock={stock} />
                </main>
            </div>
        </div>
    )
}
