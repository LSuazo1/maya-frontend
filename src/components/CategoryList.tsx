import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { IconHanger, IconDeviceMobile, IconDeviceLaptop, IconDevices, IconBrandAirtable, IconHome, IconShoe, IconPuzzle, IconDeviceTv, IconCar, IconChevronDown } from '@tabler/icons'

const classNames = (...classes: any) => classes.filter(Boolean).join(' ')
const categories = [
    {
        name: 'Ropa',
        href: '/apparel',
        icon: IconHanger,
    },
    {
        name: 'Celulares',
        href: '/cellphones',
        icon: IconDeviceMobile,
    },
    {
        name: 'Computadoras',
        href: '/computers',
        icon: IconDeviceLaptop,
    },
    {
        name: 'Electronicos',
        href: '/electronics',
        icon: IconDevices,
    },
    {
        name: 'Muebles',
        href: '/furniture',
        icon: IconBrandAirtable,
    },
    {
        name: 'Hogar',
        href: '/household',
        icon: IconHome,
    },
    {
        name: 'Calzado',
        href: '/shoes',
        icon: IconShoe,
    },
    {
        name: 'Juguetes',
        href: '/toys',
        icon: IconPuzzle,
    },
    {
        name: 'Televisores',
        href: '/tvs',
        icon: IconDeviceTv,
    },
    {
        name: 'Vehiculos',
        href: '/vehicles',
        icon: IconCar,
    }
]

export default function CategoryList() {
    return (
        <>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={classNames(open ? 'text-gray-900' : '', 'inline-flex items-center outline-none')}>
                            Categorias
                            <IconChevronDown className='ml-1 h-5 w-5' />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition-opacity duration-75"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Popover.Panel className="absolute right-0 w-52 mt-4 z-10">
                                <div className="relative grid gap-1 rounded-md shadow-lg bg-white p-2">
                                    {categories.map((category: any) => (
                                        <Link
                                            key={category.name}
                                            href={`/category${category.href}`}
                                            className="flex items-start rounded-lg py-3 px-4 hover:bg-gray-50"
                                        >
                                            <category.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <div className="ml-2">
                                                <p className="text-gray-900">{category.name}</p>
                                                {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}
