import Realm, { ObjectSchema } from "realm";
import { useQuery } from "@realm/react"

class Config extends Realm.Object<Config> {
    name!: string
    email!: string
    userId!: string

    static schema: ObjectSchema = {
        name: "Config",
        properties: {
            name: {
                type: "string"
            },
            email: {
                type: "string"
            },
            userId: {
                type: "string"
            }
        }
    }
}

const configs = useQuery(Config)
