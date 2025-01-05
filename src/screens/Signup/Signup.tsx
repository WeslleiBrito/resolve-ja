import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { 
        Container, 
        ContainerInput, 
        InputText, 
        Title, 
        ContainerButton, 
        Button, 
        TextButton, 
        ContainerText,
        TextDescription,
        ButtonLogin,
        TextButtonLogin
} from './styleSignup'
import { FirebaseError } from "firebase/app";

import { PropsScreens } from "../../routes/interfaces";

interface InputState {
    name: boolean;
    email: boolean;
    password: boolean;
}

type ValuesInput = {
    [k in keyof InputState]: string;
}

type ValuesInputError = {
    [k in keyof InputState]: boolean;
}

export const Signup = ( {navigation}: PropsScreens<'Signup'> ) => {

    const [valuesInput, setValuesInput] = useState<ValuesInput>({
        name: "",
        email: "",
        password: ""
    })

    const handleValuesInput = (input: keyof InputState, value: string) => {
        setValuesInput({
            ...valuesInput,
            [input]: value
        })
    }

    const [valuesInputError, setValuesInputError] = useState<ValuesInputError>({
        name: false,
        email: false,
        password: false
    })

    const [isFocused, setIsFocused] = useState<InputState>({
        name: false,
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
    
    const createUser = async () => {

        try {

            if (valuesInput.name === "" || valuesInput.name.length < 3 ) {
                handleValuesInputError('name')
                throw new Error("Campo nome não pode ser vazio.")
            }

            const user = await createUserWithEmailAndPassword(auth, valuesInput.email, valuesInput.password)

            await updateProfile(user.user, {
                displayName: valuesInput.name
            })

        } catch (error) {

            if(error instanceof FirebaseError){

                const errorCode = error.code;

                if(errorCode === 'auth/invalid-email' || errorCode === 'auth/email-already-in-use'){
                    handleValuesInputError('email')
                }

                if(errorCode === 'auth/weak-password'){
                    handleValuesInputError('password')
                }
            }

            console.log(error)
            
        }
    }

    return(
        <Container>
            <Title>
                Sign Up
            </Title>
            <ContainerInput>
                <InputText
                    placeholder="Nome"
                    isFocused={isFocused.name}
                    onFocus={() => handleStateFocus('name')}
                    onChangeText={(text) => handleValuesInput('name', text)}
                    isErrored={valuesInputError.name}
                />
                <InputText
                    placeholder="Email"
                    isFocused={isFocused.email}
                    onFocus={() => handleStateFocus('email')}
                    inputMode="email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => handleValuesInput('email', text)}
                    isErrored={valuesInputError.email}
                />
                <InputText
                    placeholder="Senha"
                    isFocused={isFocused.password}
                    onFocus={() => handleStateFocus('password')}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={(text) => handleValuesInput('password', text)}
                    isErrored={valuesInputError.password}
                    />
            </ContainerInput>
            <ContainerButton>
                <Button onPress={createUser}>
                    <TextButton>
                        ENVIAR
                    </TextButton>
                </Button>
            </ContainerButton>
            <ContainerText>
                <TextDescription>
                    Já tem uma conta?
                </TextDescription>
                <ButtonLogin 
                    onPress={() => navigation.navigate('Login')}
                >
                    <TextButtonLogin >
                        Login
                    </TextButtonLogin>
                </ButtonLogin>
            </ContainerText>
        </Container>
    )
}
