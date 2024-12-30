import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { styles } from './styleSignup'
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import { PropsScreens } from "../../routes/interfaces";

export const Signup = ( {navigation}: PropsScreens<'Signup'> ) => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 

            const user = userCredential.user;

            updateProfile(user, {
                displayName: name
            })
            .then(() => {
                console.log(userCredential.user)
                navigation.navigate("Home", {name: name})
            })
            .catch((error) => {
                console.log(error)
            })
      
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
                    style={styles.textInputName}
                    onChangeText={(text: string) => {setName(text)}}
                    value={name}
                    placeholder="Nome"
                />
                
                <TextInput 
                    style={styles.textInputEmail}
                    onChangeText={(text: string) => {setEmail(text)}}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                />

                
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
                <TouchableOpacity style={styles.button} onPress={createUser}>
                    <Text style={styles.titleButton}>{"Criar conta".toUpperCase()}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Login")}}>
                    <Text style={styles.titleButton}>{"Fazer Login".toUpperCase()} </Text>
                </TouchableOpacity>
        
            </View>

        </View>
    )
}
