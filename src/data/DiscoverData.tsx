import {Acoustic, ClassicHit ,Top1,Top2,Top10 } from "../constants/RenderImages/RenderImageViewHome.tsx"
export const dataViewPopular = [

    {
        title: 'Song to sing out loud',
        detailText: '30 songs for an acoustic',
        Background: () => Acoustic(),
        screen:'ListContentScreen',

    },
    {
        title: 'Party song',
        detailText: '30 songs for an acoustic',
        Background: () => ClassicHit(),
        screen:'ListContentScreen',

    },
    {
        title: 'Chill hits',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'ListContentScreen',

    },
]
export const dataViewTopAlbum = [

    {
        title: 'Acoustic Guitar 1',
        detailText: '30 songs for an acoustic',
        Background: () => Top1(),
        screen:'ListContentScreen',

    },
    {
        title: 'Acoustic Guitar 2',
        detailText: '30 songs for an acoustic',
        Background: () => Top2(),
        screen:'ListContentScreen',

    },
    {
        title: 'Acoustic Guitar 3',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'ListContentScreen',

    },
]
