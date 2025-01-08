import { createContext } from "react"
import { ThemeContextType } from "../interfaces"

const defaultValue: ThemeContextType = {
    email: "",
    idUser: "",
    name: ""
} 

export const AppContext = createContext<ThemeContextType>(defaultValue)


