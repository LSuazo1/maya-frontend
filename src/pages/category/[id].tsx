import { useRouter } from "next/router"
import ItemsList from "../../components/ItemsList"


export default function Item() {
    const { query } = useRouter()

    return (
        <main>
            <div className='w-full'>
                <ItemsList category={query?.id?.toString()} className='overflow-hidden h-auto grid grid-cols-4' />
            </div>
        </main>
    )
}
