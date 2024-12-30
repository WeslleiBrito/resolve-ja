import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { PropsTabScreens } from "../../routes/interfaces";
import { styleFeeds } from "./feedsStyle";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebaseConfig";

export default function Feeds({ navigation, route }: PropsTabScreens<"Feeds">) {
    const { name, email, userId } = route.params;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const createUser = async () => {
        console.log(firstName, lastName, email, userId)    
        try {
            const docRef = await addDoc(collection(db, "users"), {
                email: email,
                userId: userId,
                roleId: "68b5a4ee-3400-468d-a0b6-974438dd44de",
                first: firstName,
                last: lastName,
                followers: [],
                following: [],
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styleFeeds.container}>
            <Text style={styleFeeds.title}>{name.toUpperCase()}</Text>
            <Text style={styleFeeds.text}>{"Home".toUpperCase()}</Text>
            <TextInput
                style={styleFeeds.input}
                placeholder="Primeiro Nome"
                onChangeText={(text: string) => {setFirstName(text)}}
                value={firstName}
            />
            <TextInput
                style={styleFeeds.input}
                placeholder="Sobrenome"
                onChangeText={(text: string) => {setLastName(text)}}
                value={lastName}
            />
            <TouchableOpacity style={styleFeeds.button} onPress={createUser}>
                <Text style={styleFeeds.textButton}>{"Criar usuário".toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    );
}
