import { useRouter } from "next/router"

export default function Item() {
    const { query } = useRouter()
    const itemID: string = query.id?.toString() || 'No Item'

    return (
        <div>
            <h1 className='text-2xl'>{itemID}</h1>
        </div>
    )
}
