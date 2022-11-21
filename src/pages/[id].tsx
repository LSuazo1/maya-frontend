import { useRouter } from "next/router"

export default function Index() {
    const { query, push } = useRouter()

    if (query.id === 'logout') {
        push('/')
    }

    return (
        <div>
        </div>
    )
}
