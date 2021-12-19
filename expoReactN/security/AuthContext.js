import React from 'react'

export const AuthContext = React.createContext({
    isAuth: false,
    setIsAuth: auth => {},
})
