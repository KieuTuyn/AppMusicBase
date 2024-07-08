import {
    DancingQueen,
    BohemianRapsody,
    IWillAlwaysLoveYou,
    AllStar,
    HeadingImage
    } from "../constants/RenderImages/ImageListContentRender.tsx"

export const dataViewListHeading = [
    {
        title: 'Sóng to sing out loud',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',
        mode : 1
    },
    {
        title: 'Party songs',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',
        mode : 2
    },
    {
        title: 'Chill hit',
        textTitle: '30 sóng to sing in the shower',
        Background: () => HeadingImage(),
        screen:'SongViewScreen',
        mode : 3
    },
    ]

export const dataViewListMusic = [
    {
        title: 'Bohemian Rhapsody',
        author: 'Queen',
        Background: () => BohemianRapsody(),
        screen:'SongViewScreen',
        mode : 1
    },
    {
        title: 'I will always love you',
        author: 'Whitney Houston',
        Background: () => IWillAlwaysLoveYou(),
        screen:'SongToSing',
        mode : 2
    },
    {
        title: 'All Star',
        author: 'Smash Mouth',
        Background: () => AllStar(),
        screen:'SongToSing',
        mode : 3
    },
    {
        title: 'Dancing Queen',
        author: 'ABBA',
        Background: () => DancingQueen(),
        screen:'SongToSing',
        mode :4
    },
    {
        title: 'Music 2',
        author: 'Queen',
        Background: () => AllStar(),
        screen:'SongToSing',
        mode : 5
    },
    {
        title: 'Music 3',
        author: 'Queen',
        Background: () => DancingQueen(),
        screen:'SongToSing',
        mode : 6
    },

];
