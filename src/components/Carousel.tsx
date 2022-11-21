import { ICarouselProps } from '../interfaces/interfaces'


export default function Carousel({ children, className }: ICarouselProps) {
    return (
        <div className={`flex w-full gap-4 h-full ${className}`} >
            {children}
        </div>
    )
}
