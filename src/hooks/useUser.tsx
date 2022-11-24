import useSWR from 'swr'


export const useUser = () => {
    const { data: user, error, mutate } = useSWR('user')

    return {
        isLoading: !error && !user,
        loggedIn: !error && user,
        loggedOut: error && error.status === 403,
        user,
        mutate
    }
}
