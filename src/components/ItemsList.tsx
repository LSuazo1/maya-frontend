import ItemCard from "./ItemCard"
import { IItemProps, IItemsListProps } from "../interfaces/interfaces"
import { useItem } from "../hooks/useItem"
import Title from "./Title"

const classNames = (...classes: any) => classes.filter(Boolean).join(' ')


export default function ItemsList({ items, category, limit, title, orientation, className, scroll, columns = 4 }: IItemsListProps) {
    const { data } = useItem()
    items = data?.products
    title = title || `${category?.toString().charAt(0).toLocaleUpperCase()}${category?.toString().slice(1)}` || 'Title'

    return (
        <div className="w-full">
            <Title title={title} heading={2}/>
            <div className={classNames(orientation === 'vertical' ? `grid-flox-row auto-cols-auto grid-cols-4` : 'grid-flow-col overflow-x-scroll', `w-full grid auto-cols-auto gap-4 h-full ${className}`)} >
                {
                    items?.slice(0, limit).map((item: IItemProps) => {
                        return <ItemCard key={item.id} data={item} />
                    })
                }
            </div>
            {/* <hr className="h-[2px] bg-black" /> */}
        </div>
    )
}
