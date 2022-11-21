import { useRouter } from 'next/router'


export default function Lang() {
    const router = useRouter()
    const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => router.push(router.basePath, router.asPath, { locale: e.target.value })

    return (
        <div className="text-sm font-semibold">
            <select defaultValue={router.locale} className='' onChange={changeLanguage}>
                {
                    router.locales?.map(locale => (
                        <option key={locale} value={locale}>
                            {locale.toLocaleUpperCase()}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}
