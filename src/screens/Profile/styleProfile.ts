import { StyleSheet } from 'react-native';

export const styleProfile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    button: {
        width: 100,
        height: 50,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 20,
    }
});