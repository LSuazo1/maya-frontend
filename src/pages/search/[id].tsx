import { useRouter } from "next/router"

export default function Search() {
    const { query } = useRouter()
    const search: string = query.id?.toString() || 'No Item'

    return (
        <div>
            <h1 className='text-2xl'>{search}</h1>
        </div>
    )
}
