import * as FileSystem from "expo-file-system";
import { TUser } from "../interfaces";

type TInputModify = {
  [key in keyof TUser]?: string;
};

export class JsonTools {
  public static FILE_PATH = `${FileSystem.documentDirectory}data.json`;

  // Cria o arquivo JSON se ele não existir
  public createFileIfNotExists = async () => {
    console.log(JsonTools.FILE_PATH)
    try {
  
      const fileInfo = await FileSystem.getInfoAsync(JsonTools.FILE_PATH);
      
      if (!fileInfo.exists) {
        const initialData: { user: TUser } = {
          user: {
            name: "",
            email: "",
            idUser: "",
            token: "",
            photo: "",
          },
        };

        await FileSystem.writeAsStringAsync(
          JsonTools.FILE_PATH,
          JSON.stringify(initialData),
          { encoding: FileSystem.EncodingType.UTF8 }
        );
      }
    } catch (error) {
      console.error("Erro ao criar o arquivo JSON:", error);
    }
  };

  // Lê o conteúdo do arquivo JSON
  public readJson = async (path: string = JsonTools.FILE_PATH): Promise<{user: TUser}> => {
    try {
      const jsonString = await FileSystem.readAsStringAsync(path, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      const data: {user: TUser} = JSON.parse(jsonString);
      return data;
    } catch (error) {
      console.error("Erro ao ler o arquivo JSON:", error);
      return {
        user: {
          name: "",
          email: "",
          idUser: "",
          token: "",
          photo: "",
        }
      }
    }
  };

  // Modifica o JSON com os valores fornecidos
  public modifyJson = async (
    path: string = JsonTools.FILE_PATH,
    values: TInputModify
  ) => {
    try {
      const data: { user: TUser } = await this.readJson();

      Object.entries(values).forEach(([key, value]) => {
        data.user[key as keyof TInputModify] = value!;
      });

      await FileSystem.writeAsStringAsync(
        path,
        JSON.stringify(data),
        { encoding: FileSystem.EncodingType.UTF8 }
      );
    } catch (error) {
      console.error("Erro ao modificar o JSON:", error);
    }
  };
}
