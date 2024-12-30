import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type PropsStackRoutes = {
    Login: undefined;
    Signup: undefined;
    Home: {
        name: string;
        email: string;
        userId: string;
    };
};

export type PropsScreens<T extends keyof PropsStackRoutes> = NativeStackScreenProps<PropsStackRoutes, T>

export type PropsTabRoutes = {
    Feeds: {
        name: string;
        email: string;
        userId: string;
    };
};

export type PropsTabScreens<T extends keyof PropsTabRoutes> = BottomTabScreenProps<PropsTabRoutes, T>;

export type Tcomment = {
    user: string;
    text: string;
    likes: number;
    replies?: Array<Tcomment>;
}

export type TPostItem = {
    author: string;
    shares: number;
    sector: string;
    description?: string;
    media?: string;
    likes: number;
    comments: Array<Tcomment>;
}

export type TConfigImage = {
    nameImage: string;
    format?: string;
    quality?: string;
    width?: number;
    height?: number;
}