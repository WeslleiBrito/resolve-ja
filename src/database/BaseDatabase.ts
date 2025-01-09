import SQLite from 'react-native-sqlite-storage'

import config from '../../constants.json'

export abstract class BaseDatabase {

    protected static connection = SQLite.openDatabase(
        {
            name: config.DB_FILE_PATH,
            location: "default"
        },
        () => {
            console.log("Database connected!")
        },
        (error) => {
            console.log('Failed to open database:', error)
        }
    )

    protected executeQuery(query: string, params: any[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
          BaseDatabase.connection.transaction((tx) => {
            tx.executeSql(
              query,
              params,
              (tx, results) => resolve(results),
              (tx, error) => reject(error)
            );
          });
        });
    }
}