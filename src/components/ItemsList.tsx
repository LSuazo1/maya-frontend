import ItemCard from "./ItemCard"
import { IItemProps, IItemsListProps } from "../interfaces/interfaces"
import { useItem } from "../hooks/useItem"
import Title from "./Title"


export default function ItemsList({ items, category, limit, title, orientation, className, scroll }: IItemsListProps) {
    const { data } = useItem()
    items = data?.products
    title = title || `${category?.toString().charAt(0).toLocaleUpperCase()}${category?.toString().slice(1)}` || 'Title'

    return (
        <div className="w-full">
            <Title title={title} heading={2} />
            <div className={`flex gap-4 h-full ${className}`} >
                {
                    items?.slice(0, limit).map((item: IItemProps) => {
                        return <ItemCard key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    )
}
