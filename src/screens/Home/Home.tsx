import React, { useEffect, useState } from "react";
import { Image } from "expo-image"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feeds from "../Feeds/Feeds";
import { PropsScreens } from "../../routes/interfaces"; 
import { PropsTabRoutes } from "../../routes/interfaces"; 
import Profile from "../Profile/Profile";
import { getDownloadImageURL, listFilesIcons } from "../../services/getDownloadURL";


const Tab = createBottomTabNavigator<PropsTabRoutes>();

export default function Home({ navigation, route }: PropsScreens<"Home">) {
    const { name, email, userId } = route.params;
    const [icons, setIcons] = useState({
        home: ""
    });


    useEffect(() => {
        listFilesIcons();

        getDownloadImageURL("botao-de-inicio 1.png")
            .then((url) => {
                setIcons({ ...icons, home: url || ""});
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
  

    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Feeds"
                children={({ navigation: tabNavigation, route: tabRoute }) => (
                    <Feeds
                        route={{
                            key: "feeds-route-key",
                            name: "Feeds",
                            params: { name, email, userId },
                        }}
                        navigation={tabNavigation}
                    />
                )}
               options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={icons.home}
                            style={{ width: 20, height: 20 }}
                        />
                    ),
               }}
            />
            <Tab.Screen
                name="Profile"
                children={({ navigation: tabNavigation, route: tabRoute }) => (
                    <Profile
                        route={{
                            key: "profile-route-key",
                            name: "Profile"
                        }}
                        navigation={tabNavigation}
                        
                    />
                )}
                options={{
                    tabBarIcon: () => (
                        <Image
                            source={icons.home}
                            style={{ width: 20, height: 20 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
