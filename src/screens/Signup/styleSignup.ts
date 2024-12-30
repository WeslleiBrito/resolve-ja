import React from "react";
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create(
    {
        main: {
            flex: 1,
            justifyContent:"center",
            alignItems: "center"
        },
        
        textInputEmail: {
            height: 50,
            width: 350,
            borderColor: "#696969",
            borderWidth: 2,
            borderRadius: 5,
            marginBottom: 15,
            fontSize: 16
        },

        textInputPassword: {
            height: 50,
            width: 350,
            borderColor: "#696969",
            borderWidth: 2,
            borderRadius: 5,
            fontSize: 16
        },

        actions: {
            flexDirection: "row",
            width: 350,
            justifyContent: "space-between",
            marginTop: 40
        },

        button: {
            width: 150,
            height: 50,
            backgroundColor: "#9852DE",
            justifyContent: "center",
            borderRadius: 5
        },

        titleButton: {
            textAlign: "center",
            fontSize: 20,
            fontWeight: "900",
            color: "#fff"
        },
        textInputName: {
            height: 50,
            width: 350,
            borderColor: "#696969",
            borderWidth: 2,
            borderRadius: 5,
            marginBottom: 15,
            fontSize: 16
        }
    }
)