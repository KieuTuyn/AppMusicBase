import { combineReducers } from 'redux';
import { dataViewListMusic } from "../data/DataListContents.tsx";
import {dataViewFavourite, dataViewPopular, dataViewTopAlbum} from "../data/DiscoverData.tsx";
import {DataMusic} from "../data/DataMusic.tsx";
const initialMusicState = {
    listMusic: dataViewListMusic,
    popular: dataViewPopular,
    topalbum: dataViewTopAlbum,
    favourites:dataViewFavourite,
    listFavourites: [],
    dataMusic:DataMusic
};

const musicReducer = (state = initialMusicState, action) => { // Đổi tên từ counterReducer thành musicReducer
    switch (action.type) {
        case 'ADD_TO_FAVOURITES':
            return {
                ...state,
                listFavourites: [...state.listFavourites, action.payload]
            };
        case 'PLAY_PAUSE':
            return {
                ...state,
                dataMusic: [...state.dataMusic, action.payload]
            };
        case 'REPEAT_MUSIC':
            return {
                ...state,
                dataMusic: [...state.dataMusic, action.payload]
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    music: musicReducer
});

export default rootReducer;
