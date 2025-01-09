import React, { useState, useEffect } from "react"
import {AppContext} from "./AppContext"
import { PropsGlobalState, User, ThemeContextType } from '../interfaces'
import { ConfigDatabase } from "../database/ConfigDatabase"


const GlobalState: React.FC<PropsGlobalState> = ({ children }) => {

    const [user, setUser] = useState<User>(
        {
            email: "",
            idUser: "",
            name: ""
        }
    )

    

    useEffect(() => {

        const verifyUser = async (): Promise<void> => {

            try {
                const user =  await new ConfigDatabase().findUser()

                if(user){
                    setUser({
                        email: user.email,
                        name: user.name,
                        idUser: user.idUser
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }

        verifyUser()
        
    }, [])
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