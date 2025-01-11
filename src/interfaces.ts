export type TUser = {
    name: string | null,
    email: string | null,
    idUser: string,
    token: string,
    photo: string | null
}

export interface TValueDefault {
    user: TUser | null,
    handleUser: (data: TUser | null) =>  Promise<void>,
    loading: boolean
}

export interface PropsGlobalState {
    children: React.ReactNode
}

type TIconData = {
    name: string,

}
export interface Icon {
    home: {
        home: string,
        profile: string
    }
}