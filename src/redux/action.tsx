export const addToFavourites = (song) => ({
    type: 'ADD_TO_FAVOURITES',
    payload: song
});
export const setMusicData = (data) => ({
    type: 'SET_MUSIC_DATA',
    payload: data
});
export const playPause = () => ({
    type: 'PLAY_PAUSE',

});

export const skipToPrevious = () => ({
    type: 'SKIP_TO_PREVIOUS'
});

export const skipToNext = () => ({
    type: 'SKIP_TO_NEXT'
});

export const seekTo = (value) => ({
    type: 'SEEK_TO',
    payload: value
});

export const setRepeatMode = (mode) => ({
    type: 'REPEAT_MODE',
    payload: mode
});
