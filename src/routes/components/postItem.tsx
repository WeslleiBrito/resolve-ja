import React from 'react';
import { View, Text, Image } from 'react-native';
// import { Image } from 'expo-image'
import { 
    AntDesign,
    FontAwesome,
    Fontisto,
    FontAwesome5
 } from "@expo/vector-icons";

import { stylePostItem } from "./stylePostItem";
import { IPosts } from '../../interfaces';

export default function PostItem(props: IPosts) {

    const {
        nameAuthor, 
        sector, 
        like, 
        comments, 
        description,
        media,
        photoAuthor
    } = props;

   
    return (
        <View style={stylePostItem.container}>
            <View style={stylePostItem.header}>
                <View style={stylePostItem.author}>
                    <Image
                        style={stylePostItem.avatar}
                        source={photoAuthor}
                    />
                    <Text style={stylePostItem.author}>{nameAuthor}</Text>
                </View>
               
                <Text style={stylePostItem.sector}>{sector.nameSector}</Text>
            </View>
            <View>
                {
                    media ? <Image source={ media.url }/> : null
                }
            </View>
            <Text style={stylePostItem.description}>{description}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <AntDesign name="like2" size={24} color="black" />
                    
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome name="commenting" size={24} color="black" />
                    <Text>{comments.length}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Fontisto name="share-a" size={24} color="black" />
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome5 name="bookmark" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}
