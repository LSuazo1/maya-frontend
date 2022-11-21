import { IItemProps, IItemsListData } from '../interfaces/interfaces';
import useSWR from 'swr'

export const useItem = () => {
    const { data, error, mutate } = useSWR('https://dummyjson.com/products')

    return {
        isLoading: !data && !error,
        error,
        data: data as IItemsListData,
        mutate
    }
}
