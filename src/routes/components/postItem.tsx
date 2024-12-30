import React from 'react';
import { View, Text, Image } from 'react-native';
import { 
    AntDesign,
    FontAwesome,
    Fontisto,
    FontAwesome5
 } from "@expo/vector-icons";

import { stylePostItem } from "./stylePostItem";
import { TPostItem } from '../interfaces';
import { AdvancedImage } from '@cloudinary/react'
import ImageItem from '../../services/claudinaryConfig';

export default function PostItem(props: TPostItem) {

    const {
        author, 
        sector, 
        likes, 
        comments, 
        shares,
        description,
        media
    } = props;

    const image  = ImageItem({
        nameImage: media || ""
    })

    return (
        <View style={stylePostItem.container}>
            <View style={stylePostItem.header}>
                <View style={stylePostItem.author}>
                    <Image
                        style={stylePostItem.avatar}
                        source={{uri: "https://imgur.com/ArFpWFy"}}
                    />
                    <Text style={stylePostItem.author}>{author}</Text>
                </View>
               
                <Text style={stylePostItem.sector}>{sector}</Text>
            </View>

            <AdvancedImage cldImg={image}/>
            <Text style={stylePostItem.description}>{description}</Text>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <AntDesign name="like2" size={24} color="black" />
                    <Text>{likes}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome name="commenting" size={24} color="black" />
                    <Text>{comments.length}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <Fontisto name="share-a" size={24} color="black" />
                    <Text>{shares}</Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <FontAwesome5 name="bookmark" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}
