import { IconCategory, IconCurrencyDollar, IconEggCracked, IconHash, IconMapPin, IconTag, IconTextCaption, IconTypography } from '@tabler/icons'
import Head from 'next/head'
import React, { useState } from 'react'
import Input from '../components/InputText'
import Title from '../components/Title'
import { createItem } from '../utils/itemAPI'
import ItemView from '../components/ItemView'


export default function SignIn() {
    const [images, setImages] = useState<FileList | null>(null)
    const files = images ? [...images] : []
    const [title, setTitle] = useState('Titulo de la publicación')
    const [description, setDescription] = useState('Descripción de la publicación')
    const [price, setPrice] = useState('Precio')
    const [category, setCategory] = useState('Categoria')
    const [location, setLocation] = useState('Ubicación')
    const [status, setStatus] = useState('Estado')
    const [stock, setStock] = useState('Stock')

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!images) return

        const { nameItem, description, category, price, status, stock, location } = e.target
        const itemData = {
            images,
            name: nameItem.value,
            price: price.value,
            category: category.value,
            status: status.value,
            description: description.value,
            stock: stock.value,
            location: location.value,
        }

        const data = new FormData()
        files.forEach((file, i) => { data.append(`images${i}`, file, file.name); })
        console.log(files)

        fetch('http://192.168.1.5:5000/v1/items', {
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));

        // await createItem({ itemData })
    }

    const handleFileEvent = (e: React.ChangeEvent<HTMLInputElement>) => setImages(e.target.files)

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
                        <input type='file' name='images' onChange={handleFileEvent} draggable multiple />
                        <Input type='text' name='nameItem' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} label='Titulo:' Icon={IconTag} placeholder='' focus={true} />
                        <Input type='text' name='price' label='Precio:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} Icon={IconCurrencyDollar} placeholder='' />
                        <Input type='text' name='category' label='Categoría:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} Icon={IconCategory} placeholder='' />
                        <Input type='text' name='status' label='Estado:' Icon={IconEggCracked} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStatus(e.target.value)} placeholder='' />
                        <Input type='textarea' name='description' label='Descripción:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} Icon={IconTextCaption} placeholder='' />
                        <Input type='text' name='stock' label='Disponiblidad:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStock(e.target.value)} Icon={IconHash} />
                        <Input type='text' name='location' label='Ubicación:' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} Icon={IconMapPin} placeholder='' />
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
                    <ItemView title={title} description={description} price={price} category={category} images={images} location={location} status={status} stock={stock} />
                </main>
            </div>
        </div>
    )
}
