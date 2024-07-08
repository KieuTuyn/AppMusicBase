import {
    DancingQueen,
    BohemianRapsody,
    IWillAlwaysLoveYou,
    AllStar,
    HeadingImage
    } from "../constants/RenderImages/ImageListContentRender.tsx"

export const dataViewListHeading = [
    {
        id:1,
        title: 'Sóng to sing out loud',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',

    },
    {
        id:2,
        title: 'Party songs',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',

    },
    {
        id:3,
        title: 'Chill hit',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',

    },
    ]

export const dataViewListMusic = [
    {
        id:11,
        title: 'Bohemian Rhapsody',
        author: 'Queen',
        Background: () => BohemianRapsody(),
        screen:'SongViewScreen',

    },
    {
        id:12,
        title: 'I will always love you',
        author: 'Whitney Houston',
        Background: () => IWillAlwaysLoveYou(),
        screen:'SongViewScreen',

    },
    {
        id:13,
        title: 'All Star',
        author: 'Smash Mouth',
        Background: () => AllStar(),
        screen:'SongViewScreen',

    },
    {
        id:14,
        title: 'Dancing Queen',
        author: 'ABBA',
        Background: () => DancingQueen(),
        screen:'SongViewScreen',

    },
    {
        id:15,
        title: 'Music 2',
        author: 'Queen',
        Background: () => AllStar(),
        screen:'SongViewScreen',

    },
    {
        id:16,
        title: 'Music 3',
        author: 'Queen',
        Background: () => DancingQueen(),
        screen:'SongViewScreen',

    },

];
