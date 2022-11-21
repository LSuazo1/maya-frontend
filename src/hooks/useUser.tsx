import useSWR from 'swr'

interface User {
    id: number
    name: string
    email: string
    avatar: string
}

interface IUseUserProps {
    id?: string
}

export const useUser = (props?: IUseUserProps) => {
    const { data: user, error, mutate } = useSWR('/api/user')

    return {
        isLoading: !error && !user,
        error,
        user,
        mutate
    }
}
