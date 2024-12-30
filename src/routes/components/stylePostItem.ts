import { StyleSheet } from "react-native";
import { auth } from "../../services/firebaseConfig";


export const stylePostItem = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0"
    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    author: {
        flexDirection: "row",
        alignItems: "center"
    },
    
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    name: {
        fontSize: 16,
        color: "#333"
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    text: {
        fontSize: 16,
        color: "#333"
    },
    input: {
        width: "90%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: 10,
        padding: 10
    },
    button: {
        width: "90%",
        height: 50,
        backgroundColor: "#333",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    textButton: {
        color: "#fff",
        fontSize: 16
    },
    
    sector: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#333",
        marginTop: 10
    },
})