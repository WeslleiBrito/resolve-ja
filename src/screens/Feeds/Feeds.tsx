import React, {useContext} from "react";
import { View } from "react-native";
import { PropsTabScreens } from "../../routes/interfaces";
import { styleFeeds } from "./feedsStyle";
import { AppContext } from "../../context/AppContext";
import PostItem from "../../routes/components/postItem";


export default function Feeds({ navigation, route }: PropsTabScreens<"Feeds">) {
    
    const context = useContext(AppContext)
    const { posts } = context

    return (
        <View style={styleFeeds.container}>
            {
                posts.map((post) => {
                    const {
                        comments,
                        description,
                        idAuthor,
                        idPost,
                        like,
                        location,
                        nameAuthor,
                        photoAuthor,
                        sector,
                        statusDemand,
                        media,
                        responsible
                    } = post

                    return (
                        <PostItem 
                            key={idPost}
                            comments={comments}
                            description={description}
                            idAuthor={idAuthor}
                            idPost={idPost}
                            like={like}
                            location={location}
                            nameAuthor={nameAuthor}
                            photoAuthor={photoAuthor}
                            sector={sector}
                            statusDemand={statusDemand}
                            media={media}
                            responsible={responsible}  
                        /> 
                    )
                })[0]
            }
        </View>
    );
}
