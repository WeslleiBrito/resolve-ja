import React, { useState, useEffect } from "react"
import {AppContext} from "./AppContext"
import { PropsGlobalState, User, ThemeContextType } from '../interfaces'


const GlobalState: React.FC<PropsGlobalState> = ({ children }) => {

    const [user, setUser] = useState<User>(
        {
            email: "",
            idUser: "",
            name: ""
        }
    )

    const contextValue: ThemeContextType = {
        email: user.email,
        idUser: user.idUser,
        name: user.name
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}


export default GlobalState