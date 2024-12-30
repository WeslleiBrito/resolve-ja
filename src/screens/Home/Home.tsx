import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Feeds from "../Feeds/Feeds";
import { PropsScreens } from "../../routes/interfaces"; 
import { PropsTabRoutes } from "../../routes/interfaces"; 

const Tab = createBottomTabNavigator<PropsTabRoutes>();

export default function Home({ navigation, route }: PropsScreens<"Home">) {
    const { name, email, userId } = route.params;

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
                        <Feather name="home" color={color} size={size} />
                    ),
                    tabBarLabel: "Início",
                }}
            />
        </Tab.Navigator>
    );
}
