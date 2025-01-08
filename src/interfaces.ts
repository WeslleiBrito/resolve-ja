import React from "react";

export interface ThemeContextType {
    name: string;
    email: string;
    idUser: string;
}

export interface PropsGlobalState {
    children: React.ReactNode
}

export interface User {
    name: string;
    email: string;
    idUser: string;
}