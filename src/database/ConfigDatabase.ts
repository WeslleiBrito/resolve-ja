import { User } from '../interfaces'
import { BaseDatabase } from './BaseDatabase'


export class ConfigDatabase extends BaseDatabase {
    public static TABLE_CONFIG: string = "config"

    public createUser = async (input: User): Promise<void> => {
        const query = `INSERT INTO ${ConfigDatabase.TABLE_CONFIG} (name, email, idUser) VALUES (?, ?, ?)`
        const {
            name,
            email,
            idUser
        } = input

        await this.executeQuery(query, [name, email, idUser])
    }

    public findUser = async (): Promise<User | undefined> => {
        const query = `SELECT * FROM ${ConfigDatabase.TABLE_CONFIG}`

        const user = await this.executeQuery(query)
        
        if(user){
            return user as User
        }

        return user
    }
}