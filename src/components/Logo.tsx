import Image from 'next/image'
import Link from 'next/link'


export default function Logo() {
    return (
        <span>
            <Link href="/">
                <Image draggable={false} src='/maya.svg' width={90} height={40} alt="Maya Logo" />
            </Link>
        </span>
    )
}
