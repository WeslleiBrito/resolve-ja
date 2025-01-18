import React, {useContext} from "react";
import { FlatList } from "react-native";
import { PropsTabScreens } from "../../routes/interfaces";
import { styleFeeds } from "./feedsStyle";
import { AppContext } from "../../context/AppContext";
import PostItem from "../../components/postItem";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context"

export default function Feeds({ navigation, route }: PropsTabScreens<"Feeds">) {
    
    const context = useContext(AppContext)
    const { posts } = context

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styleFeeds.container}>
                <FlatList
                    data={posts}
                    renderItem={({item}) => {
                        return <PostItem
                            comments={item.comments}
                            description={item.description}
                            idAuthor={item.idAuthor}
                            idPost={item.idPost}
                            like={item.like}
                            location={item.location}
                            nameAuthor={item.nameAuthor}
                            photoAuthor={item.photoAuthor}
                            sector={item.sector}
                            statusDemand={item.statusDemand}
                            media={item.media}
                            responsible={item.responsible}
                        ></PostItem>
                    }}
                    
                    keyExtractor={item => item.idPost}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
