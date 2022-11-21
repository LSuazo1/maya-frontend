import { useState, useEffect } from 'react'
import AuthContext from './AuthContext'

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [authenticated, setAuthenticated] = useState(false)
const [cargando, setCargando] = useState(true)

    const login = (data: any) => { }
    const logout = () => { }

    return (
        <AuthContext.Provider value={{
            authenticated,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
