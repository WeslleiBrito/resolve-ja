import { sqliteTable, text} from "drizzle-orm/sqlite-core"

export const configTable = sqliteTable("config", {
    name: text().notNull(),
    email: text().notNull().unique(),
    idUser: text().notNull(),
    photo: text(),
    token: text().notNull()
})