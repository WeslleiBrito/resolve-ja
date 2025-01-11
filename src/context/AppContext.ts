import { createContext } from "react"
import { TValueDefault } from "../interfaces"

const valueDefault: TValueDefault = {
    user: {
        name: "",
        email: "",
        idUser: "",
        token: "",
        photo: ""
    },
    handleUser: async () => {}
}


export const AppContext = createContext(valueDefault)