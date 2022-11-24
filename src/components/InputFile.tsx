import { IInputFileProps } from '../interfaces/interfaces';


export default function InputFile({ Icon, label, name, message }: any) {
    return (
        <div className='relative'>
            {
                label && <div className="label mb-2">
                    <label htmlFor={name} className='block text-base font-bold text-gray-700'>{label}</label>
                </div>
            }
            <div className='flex w-full rounded-md bg-[#EAEAEA] focus:bg-[#F2F2F2]'>
                {
                    Icon && <label className='px-4 py-3 text-[#666666] htmlFor={name}'>
                        <Icon size='1.4rem' stroke={2} aria-hidden="true" />
                    </label>
                }
                <input
                    type="file"
                    name={name || label && label.toLowerCase()}
                    id={name}
                    className='w-full bg-transparent outline-none pr-4 text-sm'
                />
            </div>
        </div>
    )
}
