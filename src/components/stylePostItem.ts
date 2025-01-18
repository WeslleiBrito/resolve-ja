
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window")

interface IPropsPostItemStyle {
    expand?: boolean,
    isLike?: boolean
} 

export const stylePostItem = (props: IPropsPostItemStyle) => {
    const {
        expand
    } = props

    return  StyleSheet.create({
        container: {
            width: width,
            paddingLeft: 3,
            paddingRight: 3,
            borderBottomWidth: 1,
            borderBottomColor: "#f0f0f0"
        },
        header: {
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between"
        },
        author: {
            flexDirection: "row",
            alignItems: "flex-end"
        },
        
        avatar: {
            width: 35,
            height: 35,
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
            width: width * 0.9,
            height: 50,
            backgroundColor: "#fff",
            borderRadius: 5,
            marginBottom: 10,
            padding: 10
        },
        button: {
            width: width * 0.9,
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
            flexDirection: "row"
        },
        description: {
            fontSize: 16,
            color: "#333",
            marginTop: 10
        },
        containerMedia: {
            marginTop: 10,
            marginBottom: 10
        },
        media: {
            width: "100%",
            height: 300
        },
        interactions: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        mesh: {
            flexDirection: "row",
            gap: width * 0.04
        },
        localization: {
            flexDirection: "row",
            alignItems: "baseline"
        },
        comments: {
            flexDirection: "row",
            gap: width * 0.02,
            justifyContent: "space-between",
            alignItems: "center"
        }
    })
}

