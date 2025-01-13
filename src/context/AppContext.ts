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
    handleUser: async () => {},
    address: {
        city_district: "",
        country: "",
        geoLocation: {
            latitude: 0,
            longitude: 0
        },
        road: "",
        state: "",
        type: "",
        suburb: undefined
    },
    error: undefined,
    loading: true,
    posts: []
}


export const AppContext = createContext(valueDefault)