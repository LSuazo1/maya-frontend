import Link from "next/link"
import { IInboxItemProps } from "../interfaces/interfaces"

const timeCalculator = (fecha: string) => {
    const fechaActual = new Date()
    const fechaNotificacion = new Date(fecha)
    const diferencia = fechaActual.getTime() - fechaNotificacion.getTime()
    const days = Math.floor(diferencia / (1000 * 60 * 60 * 24))
    const hours = Math.floor(diferencia / (1000 * 60 * 60))
    const minutes = Math.floor(diferencia / (1000 * 60))
    const seconds = Math.floor(diferencia / (1000))

    if (days > 0) {
        return days + 'd'
    } else if (hours > 0) {
        return hours + 'h'
    } else if (minutes > 0) {
        return minutes + 'm'
    } else {
        return seconds + 's'
    }
}


export default function Notification({ id, title, message, type, href, created_at }: IInboxItemProps) {
    return (
        <Link href={`${type}/${href}`} className='flex items-start rounded-lg py-3 px-4 hover:bg-gray-50'>
            <div className='w-64 flex-row'>
                <div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold'>{title}</h1>
                    <p className='text-sm text-gray-500'>{message}</p>
                    <p className='text-sm text-gray-500'>Hace {timeCalculator(created_at)}</p>
                </div>
            </div>
        </Link>
    )
}
