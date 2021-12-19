import React, {useState} from "react";
import {AppNavigator} from "./AppNavigator";
import {AuthNavigator} from "./AuthNavigator";
import {AuthContext} from "./AuthContext";


export const Navigate = () =>{
    const [isAuth, setIsAuth] = useState(false)
    return(
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {!isAuth ? <AuthNavigator /> : <AppNavigator />}
        </AuthContext.Provider>
    )
}

