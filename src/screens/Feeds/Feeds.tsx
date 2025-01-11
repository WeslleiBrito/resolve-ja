import React, {useState} from "react";
import { View } from "react-native";
import { PropsTabScreens } from "../../routes/interfaces";
import { styleFeeds } from "./feedsStyle";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../services/firebaseConfig";


export default function Feeds({ navigation, route }: PropsTabScreens<"Feeds">) {
    const { name, email, userId } = route.params;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [homeIcon, setHomeIcon] = useState("");
    
    const createUser = async () => {
        console.log(firstName, lastName, email, userId);
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
            console.log(error);
        }
    };

    

    return (
        <View style={styleFeeds.container}>
            
        </View>
    );
}
