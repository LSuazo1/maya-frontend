import Image from 'next/image'
import Title from './Title'

interface IItemViewProps {
    title: string
    description: string
    price: string
    category: string
    location: string
    status: string
    stock: string
    images: FileList | null
}


export default function Preview({ title, description, price, category, location, status, stock, images }: IItemViewProps) {
    return (
        <div className='flex w-full h-auto rounded-md overflow-hidden bg-white'>
            <div className='w-full'>
                <div className='bg-[#EDEDED]'>
                    <Image src={`/${images?.item.call}`} alt='Imagen de la publicación' width={500} height={500} />
                </div>
            </div>
            <div className="w-[300px] preview bg-white p-4">
                <Title title={title} heading={2} />
                <Title title={price} heading={4} />
                <Title title={category} heading={5} />
                <Title title={description} heading={3} />
                <Title title={location} heading={6} />
                <Title title={status} heading={4} />
                <Title title={stock} heading={4} />
            </div>
        </div>
    )
}
