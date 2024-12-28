import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { styles } from './styleLogin'
import { View, TextInput, TouchableOpacity, Text } from "react-native"

export const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           console.log(errorMessage)
        })
    }
    return(
        <View style={styles.main}>
            <View>
                <TextInput 
                    style={styles.textInputEmail}
                    onChangeText={(text: string) => {setEmail(text)}}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                >

                </TextInput>
                <TextInput
                    style={styles.textInputPassword}
                    onChangeText={(text: string) => {setPassword(text)}}
                    value={password}
                    placeholder="Senha"
                    secureTextEntry={true}
                >

                </TextInput>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.buttonEnter} onPress={handleLogin}>
                    <Text style={styles.titleButton}>{"Criar conta".toUpperCase()}</Text>
                </TouchableOpacity>
        
            </View>
            
        </View>
    )
}
