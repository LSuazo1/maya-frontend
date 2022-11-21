import Image from 'next/image'
import { IconHeart } from '@tabler/icons'
import { IItemProps } from '../interfaces/interfaces'


export default function ItemCard(props: { data: IItemProps }) {
    const { id, title, thumbnail, price, location } = props.data

    return (
        <div className="p-3 min-w-[25%] rounded-lg h-full bg-white">
            <div className="image relative h-64">
                <Image src={thumbnail} loading='lazy' fill sizes='w-full' className="object-cover rounded-md" alt="No se encuentra" />
            </div>
            <div className="price mt-4">
                <h5 className="text-gray-900 text-xl font-medium">L. {price || 10000}</h5>
            </div>
            <div className="name">
                <h5 className="text-gray-900 text-xl font-medium mt-2">{title || 'Item name'}</h5>
            </div>
            <div className="location">
                <p className="text-gray-700 text-base mt-2">{location || 'Location'}</p>
            </div>
            <div className="toActionMenu flex items-center mt-2 justify-between">
                <a href={`/item/${id}`} className='p-3 rounded-lg bg-blue-600 text-white font-medium text-center w-full'>Mostrar Detalles</a>
                <div className="wishlist p-4">
                    <button>
                        <IconHeart stroke={1.8} size="1.8rem" />
                    </button>
                </div>
            </div>
        </div>
    )
}
