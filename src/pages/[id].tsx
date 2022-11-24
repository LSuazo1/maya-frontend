import { useRouter } from "next/router"
import { useUser } from "../hooks/useUser"

export default function Index() {
    const { query, push } = useRouter()
    const { user, mutate } = useUser()

    if (query.id === 'logout') {
        push('/')
        mutate(null)
    }

    return (
        <div>
        </div>
    )
}
