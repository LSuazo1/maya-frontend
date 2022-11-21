import { createContext } from 'react';

interface LocaleContextProps {
    locale: string;
    setLocale: (locale: string) => void;
}

export const LocaleContext = createContext<LocaleContextProps>({
    locale: 'en',
    setLocale: () => { },
})

