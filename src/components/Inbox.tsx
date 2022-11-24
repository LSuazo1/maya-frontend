import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import InboxItem from './InboxItem'
import { InboxProps, IInboxItemProps } from '../interfaces/interfaces'
import { IconBell, IconMessage } from '@tabler/icons'

const classNames = (...classes: any) => classes.filter(Boolean).join(' ')


export default function Inbox({ type: typeInbox, data }: InboxProps) {
    return (
        <>
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={classNames(open ? 'text-gray-900' : '', 'inline-flex align-middle items-center outline-none')}>
                            {typeInbox === 'notification' ? <IconBell className='w-6 h-6' /> : <IconMessage className='w-6 h-6' />}
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
                            <Popover.Panel className="absolute w-auto right-0 mt-4 z-10 max-h-96 overflow-y-scroll shadow-md">
                                <div className="relative grid gap-1 rounded-md shadow-lg bg-white p-2">
                                    {
                                        data.map(({ id, href, title, type, message, created_at }: IInboxItemProps) => {
                                            return <InboxItem key={id} href={href} id={id} title={title} message={message} type={type} created_at={created_at} />
                                        })
                                    }
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </>
    )
}

