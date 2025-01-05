import React, {useState, useEffect} from "react";
import {View, TouchableOpacity, TextInput, Text} from "react-native"
import { styleLogin } from "./styleLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { PropsScreens } from "../../routes/interfaces";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store"



export default function Login({ navigation }: PropsScreens<'Login'>){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const apiKey = "AIzaSyDi8iqz06qAthG_DmbzW8Szxtt-BKGJQpk"
    
    const saveUid = async(uid: string): Promise<void> => {
        await setItemAsync("userId", uid)
    }

    const getUid = async() => {

        const getUserId = await getItemAsync("userId")

        if (getUserId === null){
            return ""
        }else{
            return getUserId
        }
    }

    const clearUid = async() => {
        await deleteItemAsync("userId")
    }

    const getDataUser = async(uid: string): Promise<{name: string, email: string, userId: string, photo: string}> => {
        
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                idToken: [uid]
            })
        })

        const [data] = await response.json()
        console.log(response)
        return{
            name: data.displayName,
            email: data.email,
            userId: data.localId,
            photo: data.photoUrl
        }
    }

    const checkUser = async() => {

        const uid = await getUid()
        console.log("foi chamado o checkUser")
        if (uid !== ""){
            const data = await getDataUser(uid)
            console.log(data)
            navigation.navigate("Home", {name: data.name, email: data.email, userId: data.userId})
        }

    }

    const handleLogin = () => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {
            const user = userCredential.user;
            await clearUid()
            await saveUid(user.uid)
            navigation.navigate("Home", {name: user.displayName || "teste", email: email, userId: user.uid})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    useEffect(() => {
        checkUser()
    }, [])

    return(
        <View style={styleLogin.container}>
            <TextInput
                style={styleLogin.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(text: string) => {setEmail(text)}}
                value={email}
            />
            <TextInput
                style={styleLogin.input}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={(text: string) => {setPassword(text)}}
                value={password}
            />

            <TouchableOpacity style={styleLogin.button} onPress={handleLogin}>
                <Text style={styleLogin.textButton}>{"Entrar".toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleLogin.button} onPress={() => {navigation.navigate("Signup")}}>
                <Text style={styleLogin.textButton}>{"Criar conta".toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}