import {Acoustic, ClassicHit ,Top1,Top2,Top10 } from "../constants/RenderImages/RenderImageViewHome.tsx"
import { Image1} from "../constants/RenderImages/Favourite.tsx";
export const dataViewPopular = [

    {
        id:'P1',
        title: 'Song to sing out loud',
        detailText: '30 songs for an acoustic',
        Background: () => Acoustic(),
        screen:'MusicCatalogScreen',

    },
    {
        id:'P2',
        title: 'Party song',
        detailText: '30 songs for an acoustic',
        Background: () => ClassicHit(),
        screen:'MusicCatalogScreen',

    },
    {
        id:'P3',
        title: 'Chill hits',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'MusicCatalogScreen',

    },
]
export const dataViewTopAlbum = [

    {
        id:'T1',
        title: 'Acoustic Guitar 1',
        detailText: '30 songs for an acoustic',
        Background: () => Top1(),
        screen:'MusicCatalogScreen',

    },
    {
        id:'T2',
        title: 'Acoustic Guitar 2',
        detailText: '30 songs for an acoustic',
        Background: () => Top2(),
        screen:'MusicCatalogScreen',

    },
    {
        id:'T3',
        title: 'Acoustic Guitar 3',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'MusicCatalogScreen',

    },
]
export const dataViewFavourite = [

    {
        id:'F1',
        title: 'Favourite 1',
        Background: () => Image1(),
        screen:'FavouriteScreen',

    },
    {
        id:'F2',
        title: 'Favourite 2',
        Background: () => Image1(),
        screen:'FavouriteScreen',

    },
    {
        id:'F3',
        title: 'Favourite 3',
        Background: () => Image1(),
        screen:'FavouriteScreen',

    },
]
