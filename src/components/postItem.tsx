import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image'
import {
    AntDesign,
    MaterialCommunityIcons,
    Fontisto,
    Entypo
} from "@expo/vector-icons";

import { stylePostItem } from "./stylePostItem";
import { IPosts } from '../interfaces';


export default function PostItem(props: IPosts) {

    const {
        nameAuthor,
        sector,
        like,
        comments,
        description,
        media,
        photoAuthor,
        location
    } = props;

    const [ isLike, setIsLike] = useState<boolean>(false)

    const [descriptionState, setDescriptionState] = useState<string>(description)
    const [expand, setExpand] = useState<boolean>(false)

    const handleDescription = (): void => {
        const listText = description.split(" ")

        if (!expand && description.length > 100) {
            setDescriptionState(listText.slice(0, 12).join(" ") + "...mais")
        } else {
            setDescriptionState(description)
        }
    }

    useEffect(() => { handleDescription() }, [expand])

    const styles = stylePostItem({ expand: expand })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.author}>
                    <Image
                        style={styles.avatar}
                        source={photoAuthor}
                    />
                    <Text style={styles.author}>{nameAuthor}</Text>
                </View>

                <Text style={styles.sector}>{sector.nameSector}</Text>
            </View>
            <View style={styles.containerMedia}>
                {
                    media ? <Image style={styles.media} source={media.url} /> : null
                }
            </View>
            <View style={styles.interactions}>
                <View style={styles.mesh}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <AntDesign name={isLike ? "heart" : "hearto"} size={24} color="black" />
                    </View>
                    <View style={styles.comments}>
                        <AntDesign name="message1" size={24} color="black" />
                        <Text>{comments.length}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons name="share-all-outline" size={24} color="black" />
                    </View>
                </View>
                <View style={styles.localization}>
                    <Text>{location.suburb || location.city_district}</Text>
                    <Entypo name="location-pin" size={24} color="black" />
                </View>
            </View>
            <Text style={styles.description} onPress={() => setExpand(!expand)}>{descriptionState}</Text>

        </View>
    )
}
