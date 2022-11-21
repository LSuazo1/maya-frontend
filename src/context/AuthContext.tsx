import { createContext } from 'react'

interface AuthContextProps {
    // user: any;
    login: (data: any) => void;
    logout: () => void;
    authenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
    // user: null,
    login: (data: any) => { },
    logout: () => { },
    authenticated: false,
})

export default AuthContext
