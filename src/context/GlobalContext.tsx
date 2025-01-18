import React, { useState, useEffect } from "react"
import {AppContext} from "./AppContext"
import { IAddressLocation, PropsGlobalState, TUser, TValueDefault } from '../interfaces'
import * as SQLite from "expo-sqlite"
import { drizzle } from "drizzle-orm/expo-sqlite"
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from "../../drizzle/migrations"
import { configTable } from "../../db/schema/configTable"
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject
} from "expo-location"
import { postsMock } from "../mocks/postMocks"

const expo =  SQLite.openDatabaseSync("database.db")
const db = drizzle(expo)

const GlobalState: React.FC<PropsGlobalState> = ({ children }) => {
    const { success, error } = useMigrations(db, migrations);
    const [user, setUser] = useState<TUser | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [location, setLocation] = useState<LocationObject | null>(null)
    const [address, setAddress] = useState<IAddressLocation | null>(null)

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

                getReverseGeocode(
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

    const requestLocationPermissions = async () => {
        const { granted } = await requestForegroundPermissionsAsync()

        if ( granted ) {
            const currentPosition = await getCurrentPositionAsync()
            setLocation(currentPosition)
        }
    }

    const getReverseGeocode = async (user: TUser) => {
        try {
            if ( location ) {
                const latitude = location.coords.latitude
                const longitude = location.coords.longitude
                
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
                    {
                        headers: {
                            "User-Agent": `MyAwesomeApp/1.0 (${user.email})`,
                            Accept: "application/json",
                        },
                    }
                );
    
                if (!response.ok) {
                    console.error("Erro na resposta:", response.status, response.statusText);
                    return;
                }
    
                const data: IAddressLocation = await response.json();

                setAddress(data)
            }

        } catch (error) {
            console.error("Erro ao buscar dados de localização:", error);
        }
    }


    useEffect(() => {
        requestLocationPermissions()
    }, [])

    useEffect(() => {
       getUser()
    }, [success])

    const contextValue: TValueDefault = {
        user,
        handleUser,
        loading,
        error,
        address,
        posts: postsMock
    }

    return(
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}


export default GlobalState