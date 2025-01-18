import React from "react";
import { StyleSheet } from "react-native"


export const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        padding: 10,
        marginBottom: 15
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: "#000",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 18
    }
})