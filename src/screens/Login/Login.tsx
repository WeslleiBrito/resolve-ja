import React, {useState, useEffect, useContext} from "react";
import {View, TouchableOpacity, TextInput, Text} from "react-native"
import { styleLogin } from "./styleLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { PropsScreens } from "../../routes/interfaces";
import {} from "react"
import { AppContext } from "../../context/AppContext";


export default function Login({ navigation }: PropsScreens<'Login'>){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")    
    const context = useContext(AppContext)
    const { user, handleUser, loading } = context


    const checkUser = async () => {

        if (!loading && user){
            navigation.navigate("Home", {
                name: user.name || "",
                email: user.email || "",
                token: user.name || "",
                userId: user.idUser,
                photo: user.photo
            })
        }
    }

    const handleLogin = () => {
        
        signInWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => {

            const user = userCredential.user

            await handleUser(
                {
                    email: user.email,
                    idUser: user.uid,
                    name: user.displayName,
                    photo: user.photoURL,
                    token: await user.getIdToken()
                }
            )
           
            navigation.navigate("Home", {
                name: user.displayName || "teste", 
                email: email, 
                userId: user.uid, 
                token: await user.getIdToken(),
                photo: user.photoURL
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    useEffect(() => {
        checkUser()
    }, [loading, user])

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