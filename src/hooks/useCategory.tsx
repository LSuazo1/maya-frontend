import { } from '../interfaces/interfaces';
import useSWR from 'swr'

interface ICategoryProps {
    category: string
    href: string
    icon: any
    url: string
}

interface ICategoriesListData {
    categories: ICategoryProps[]
    total: number
    skip: number
    limit: number
}


export const useCategory = () => {
    const { data, error, mutate } = useSWR('https://dummyjson.com/products')

    return {
        isLoading: !data && !error,
        error,
        data: data as ICategoriesListData,
        mutate
    }
}
