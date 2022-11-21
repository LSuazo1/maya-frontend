interface ITitleProps {
    title: string;
    heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function Title({ title, heading }: ITitleProps) {
    return (
        <div className="w-full my-6">
            <h1 className='text-2xl'>{title || 'Title'}</h1>
        </div>
    )
}
