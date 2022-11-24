import { ChangeEvent, Fragment, ReactEventHandler, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { IconCheck, IconChevronDown } from '@tabler/icons'

const classNames = (...classes: any[]) => classes.filter(Boolean).join(' ')


export default function InputSelect({ label, items, Icon }: any) {
    const [selectedItem, setSelectedItem] = useState(items[0])
    console.log(selectedItem)

    return (
        <>
            <Listbox value={selectedItem} onChange={setSelectedItem}>
                {({ open }) => (
                    <>
                        <div className="relative mt-1">
                            {
                                label && <div className="label mb-2">
                                    <label className='block text-base font-bold text-gray-700'>{label}</label>
                                </div>
                            }
                            <Listbox.Button className="flex w-full cursor-default rounded-md py-3 px-4 text-left shadow-sm bg-[#EAEAEA] focus:bg-[#F2F2F2]">
                                {
                                    Icon && <label className='mr-4 text-[#666666]'>
                                        <Icon size='1.4rem' stroke={2} aria-hidden="true" />
                                    </label>
                                }
                                {selectedItem}
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {items.map((item: any) => (
                                        <Listbox.Option
                                            key={item}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={item}
                                        >
                                            <div className="flex items-center">
                                                <span>
                                                    {item}
                                                </span>
                                            </div>
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>
    )
}
