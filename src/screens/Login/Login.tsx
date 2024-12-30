import React, {useState} from "react";
import {View, TouchableOpacity, TextInput, Text} from "react-native"
import { styleLogin } from "./styleLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { PropsScreens } from "../../routes/interfaces";

export default function Login({ navigation }: PropsScreens<'Login'>){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const handleLogin = () => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            navigation.navigate("Home", {name: user.displayName || "teste", email: email, userId: user.uid})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }

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
                secureTextEntry={false}
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