import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Link from "next/link"
import { IconGift, IconUser, IconLogout, IconSettings } from "@tabler/icons"
import { useUser } from "../hooks/useUser"

const classNames = (...classes: any) => classes.filter(Boolean).join(' ')
const listOptions = [
    {
        name: 'Perfil',
        href: '/profile',
        icon: IconUser,
    },
    {
        name: "Lista de deseos",
        href: "/whishlist",
        icon: IconGift,
    },
    {
        name: 'Configuración',
        href: '/settings',
        icon: IconSettings,
    },
    {
        name: "Cerrar sesión",
        href: "/logout",
        icon: IconLogout,
    }
]

export default function Avatar() {
    const { user, isLoading, error } = useUser()

    return (
        <div className="cursor-pointer">
            {
                user ? '' : null
            }
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={classNames(open ? 'text-gray-900' : '')}>
                            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                <span className="font-medium text-gray-600 dark:text-gray-300">AV</span>
                            </div>
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
                                    {listOptions.map((option) => (
                                        <Link
                                            key={option.name}
                                            href={`/${option.href}`}
                                            className="flex items-start rounded-lg py-3 px-4 hover:bg-gray-50"
                                        >
                                            <option.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                                            <div className="ml-2">
                                                <p className="text-base font-medium text-gray-900">{option.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
