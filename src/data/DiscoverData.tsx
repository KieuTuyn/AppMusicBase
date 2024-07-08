import {Acoustic, ClassicHit ,Top1,Top2,Top10 } from "../constants/RenderImages/RenderImageViewHome.tsx"
export const dataViewPopular = [

    {
        title: 'Song to sing out loud',
        detailText: '30 songs for an acoustic',
        Background: () => Acoustic(),
        screen:'SongToSing',

    },
    {
        title: 'Party song',
        detailText: '30 songs for an acoustic',
        Background: () => ClassicHit(),
        screen:'PartySong',

    },
    {
        title: 'Chill hits',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'ChillHits',

    },
]
export const dataViewTopAlbum = [

    {
        title: 'Acoustic Guitar 1',
        detailText: '30 songs for an acoustic',
        Background: () => Top1(),
        screen:'SongToSing',

    },
    {
        title: 'Acoustic Guitar 2',
        detailText: '30 songs for an acoustic',
        Background: () => Top2(),
        screen:'SongToSing',

    },
    {
        title: 'Acoustic Guitar 3',
        detailText: '10 songs for an top',
        Background: () => Top10(),
        screen:'SongToSing',

    },
]
