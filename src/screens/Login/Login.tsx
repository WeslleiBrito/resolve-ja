import React, {useState, useEffect} from "react";
import {View, TouchableOpacity, TextInput, Text} from "react-native"
import { styleLogin } from "./styleLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { PropsScreens } from "../../routes/interfaces";
import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store"
import {
    TextDescription,
    ButtonText,
    ContainerText,
    NameButton, 
    InputText, 
    ContainerInput
} from '../Signup/styleSignup'
import {FirebaseError} from "firebase/app"

interface InputState {
    email: boolean;
    password: boolean;
}

type ValuesInput = {
    [k in keyof InputState]: string;
}

type ValuesInputError = {
    [k in keyof InputState]: boolean;
}

export default function Login({ navigation }: PropsScreens<'Login'>){
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const apiKey = "AIzaSyDi8iqz06qAthG_DmbzW8Szxtt-BKGJQpk"
    
    const [valuesInputError, setValuesInputError] = useState<ValuesInputError>({
            email: false,
            password: false
        })
    
        const [isFocused, setIsFocused] = useState<InputState>({
            email: false,
            password: false
        });
    
    const handleStateFocus = (input: keyof InputState) => {
        
        const copyIsFocused: InputState = {...isFocused}

        for(const key in copyIsFocused){
            if(key === input){
                copyIsFocused[key] = !copyIsFocused[key]
            } else {
                copyIsFocused[key as keyof InputState] = false
            }
        }

        setIsFocused({
            ...copyIsFocused
        })
    }

    const handleValuesInputError = (input: keyof InputState) => {
        
        setValuesInputError({
            ...valuesInputError,
            [input]: true
        })

        setTimeout(() => {
            setValuesInputError((prev) => ({
                ...prev,
                [input]: false
            }))
        }, 5000)
    }
    

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

    const handleLogin = async () => {
        console.log("Login -> 133 Fui chamado")
        try {
            const login = await signInWithEmailAndPassword(auth, email, password)
            const user = login.user
            await clearUid()
            await saveUid(user.uid)
            navigation.navigate("Home", {name: user.displayName || "teste", email: email, userId: user.uid})
        } catch (error) {

            if(error instanceof FirebaseError){
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            }  
        }
    }

    useEffect(() => {
        checkUser()
    }, [])

    return(
        <View style={styleLogin.container}>
           <ContainerInput>
            <InputText
                    isFocused={isFocused.email}
                    onFocus={() => handleStateFocus('email')}
                    isErrored={valuesInputError.email}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={(text: string) => {setEmail(text)}}
                    autoCapitalize="none"
                    value={email}
                />
                <InputText
                    isFocused={isFocused.email}
                    onFocus={() => handleStateFocus('password')}
                    isErrored={valuesInputError.email}
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={(text: string) => {setPassword(text)}}
                    autoCapitalize="none"
                    value={password}
                />
           </ContainerInput>

            <TouchableOpacity style={styleLogin.button} onPress={async () => {await handleLogin()}}>
                <Text style={styleLogin.textButton}>{"Entrar".toUpperCase()}</Text>
            </TouchableOpacity>

            <ContainerText>
                <TextDescription>
                    Criar uma nova conta?
                </TextDescription>
                <ButtonText 
                    onPress={() => navigation.navigate('Signup')}
                >
                    <NameButton >
                        Criar
                    </NameButton>
                </ButtonText>
            </ContainerText>
        </View>
    )
}