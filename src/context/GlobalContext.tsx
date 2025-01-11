import React, { useState, useEffect } from "react"
import {AppContext} from "./AppContext"
import { PropsGlobalState, TUser } from '../interfaces'
import * as SQLite from "expo-sqlite"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from "../../drizzle/migrations"
import { configTable } from "../../db/schema/configTable"

const expo =  SQLite.openDatabaseSync("database.db")
const db = drizzle(expo)

const GlobalState: React.FC<PropsGlobalState> = ({ children }) => {
    const { success, error } = useMigrations(db, migrations);
    const [user, setUser] = useState<TUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const handleUser = async (data: TUser | null): Promise<void> => {
        try {
            if (!success) return

            setUser(data)

            await db.delete(configTable)

            if(data) {
                await db.insert(configTable).values(
                    [
                        {
                            name: data.name || "",
                            email: data.email || "",
                            idUser: data.idUser,
                            token: data.token,
                            photo: data.photo
                        }
                    ]
                )
            }
            
        } catch (error) {
            
        }
    }

    const getUser = async () => {
        try {

            if(!success) return

            const [userExists] = await db.select().from(configTable)
    
            if (userExists){
                setUser(
                    {
                        email: userExists.email,
                        name: userExists.name,
                        idUser: userExists.idUser,
                        photo: userExists.photo,
                        token: userExists.token
                    }
                )
            }
        } catch (error) {
            console.error("Erro ao carregar o usuário no banco de dados", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
       getUser()
    }, [success])

    const contextValue = {
        user,
        handleUser,
        loading
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}


export default GlobalState