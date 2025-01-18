
export interface ErrorMigration {
    cause?: unknown;
}

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
    loading: boolean,
    error: undefined | ErrorMigration,
    address: IAddressLocation | null,
    posts: Array<IPosts>
}

export interface PropsGlobalState {
    children: React.ReactNode
}


export interface Icon {
    home: {
        home: string,
        profile: string
    }
}

export enum STATUS {
    IN_PROGRESS = "in_progress",
    OPEN = "open",
    FINISHED = "finished",
    CANCELED = "canceled"
}


export interface IAddressLocation {
    country: string
    state: string
    city_district: string
    suburb?: string
    road: string
    type: string
    geoLocation: {
        longitude: number
        latitude: number
    }
}

export interface IComments {
    idComment: string
    idPost: string
    idAuthor: string
    nameAuthor: string
    photoAuthor: string
    parentComments: string | undefined
    commentsChildren: Array<IComments>  
    content: string
    like: Array<{
        idLike: string
        idUser: string
        like: boolean
    }>
}

export interface IPosts {
    idPost: string
    idAuthor: string
    nameAuthor: string
    photoAuthor: string
    media?: {
        type: string
        url: string
    }
    description: string
    like: Array<
        {
            idLike: string
            idUser: string
            like: boolean
            nameAuthor: string
            photoAuthor: string
        }
    >
    comments: Array<IComments>
    location: IAddressLocation
    responsible?: string
    statusDemand:  {
        idStatusDemand: string
        name: STATUS
    },
    sector: {
        idSector: string
        nameSector: string
    }
}