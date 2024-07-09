import { combineReducers } from 'redux';
import { dataViewListMusic } from "../data/DataListContents.tsx";
import {dataViewFavourite, dataViewPopular, dataViewTopAlbum} from "../data/DiscoverData.tsx";
import {DataMusic} from "../data/DataMusic.tsx";
import {RepeatMode} from "react-native-track-player";
const initialMusicState = {
    listMusic: dataViewListMusic,
    popular: dataViewPopular,
    topalbum: dataViewTopAlbum,
    favourites:dataViewFavourite,
    listFavourites: [],
    dataMusic:DataMusic,
    isLoading: true,
    isPlaying: false,
    position: 0,
    duration: 0,
    sliderValue: 0,
    repeatMode:RepeatMode.Track,

    };


const musicReducer = (state = initialMusicState, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            if (state.listFavourites.some(fav => fav.id === action.payload.id)) { // kiểm tra nếu ko trùng mới add thêm vào Favourite
                return state;
            }
            return {
                ...state,
                listFavourites: [...state.listFavourites, action.payload]
            };
        case 'SET_MUSIC_DATA':
            return {
                ...state,
                dataMusic: action.payload
            };
        case 'PLAY_PAUSE':
            return { ...state, isPlaying: !state.isPlaying };
        case 'SKIP_TO_PREVIOUS':

            return state;
        case 'SKIP_TO_NEXT':

            return state;
        case 'SEEK_TO':
            return { ...state, position: action.payload };
        case 'REPEAT_MODE':
            return {
                 ...state, repeatMode: action.payload
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    music: musicReducer
});

export default rootReducer;
