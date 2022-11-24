import { IInputTextProps } from '../interfaces/interfaces'


export default function InputText({ children, Icon, type, focus, name, label, value, placeholder, message, onChange }: IInputTextProps) {
    return (
        <div className='relative'>
            {
                label && <div className="label mb-2">
                    <label htmlFor={name} className='block text-base font-bold text-gray-700'>{label}</label>
                </div>
            }
            <div className='flex w-full rounded-md bg-[#EAEAEA] focus:bg-[#F2F2F2]'>
                {
                    Icon && <label className='px-4 py-3 text-[#666666]' htmlFor={name}>
                        <Icon size='1.4rem' stroke={2} aria-hidden="true" />
                    </label>
                }
                <input
                    type={type}
                    name={name || label && label.toLowerCase()}
                    id={name}
                    value={value}
                    placeholder={placeholder}
                    className='w-full bg-transparent outline-none pr-4 text-sm'
                    autoFocus={focus}
                    onChange={onChange}
                />
                {children}
            </div>
            {
                message && <div className="message">
                    <p className="text-sm text-red-500">Este campo es obligatorio</p>
                </div>

            }
        </div>
    )
}
