import { useRouter } from "next/router";
import en from '../locales/en'
import es from '../locales/es'

export default function useLang() {
    const { locale, locales, defaultLocale, asPath } = useRouter();
    const translation = locale === 'en' ? en : es
    return { translation, locale, locales, defaultLocale, asPath }
}
