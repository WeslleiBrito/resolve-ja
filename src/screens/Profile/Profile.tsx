import React, {useState} from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import {  styleProfile } from "./styleProfile";
import { updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { PropsScreens } from "../../routes/interfaces";


export default function Profile({ navigation }: PropsScreens<'Profile'>) {
    const [name, setName] = useState<string>(auth.currentUser?.displayName || "")
    const [url, setUrl] = useState<string>(auth.currentUser?.photoURL || "")
    

    const update = async () => {
        try {
            const user = auth.currentUser

            if(!user) {
                return
            }

            await updateProfile( user , {
                displayName: name,
                photoURL: url
            })

            console.log("Atualizado com sucesso")
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
            <View style={styleProfile.container}>
                <TextInput 
                    placeholder="Nome" 
                    value={name} 
                    onChangeText={(text: string) => {setName(text)}}
                    style={styleProfile.input}
                />
                <TextInput 
                    placeholder="Foto de perfil" 
                    value={url} 
                    onChangeText={(text: string) => {setUrl(text)}}
                    style={styleProfile.input}
                />
                <TouchableOpacity style={styleProfile.button} onPress={async () => { await update()}}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
            </View>
        )
}