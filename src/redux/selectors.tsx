import { createSelector } from 'reselect';

const getMusicState = (state) => state.music;

export const getIsLoading = createSelector(
    [getMusicState],
    (music) => music.isLoading
);

export const getIsPlaying = createSelector(
    [getMusicState],
    (music) => music.isPlaying
);

export const getPosition = createSelector(
    [getMusicState],
    (music) => music.position
);

export const getDuration = createSelector(
    [getMusicState],
    (music) => music.duration
);

export const getSliderValue = createSelector(
    [getMusicState],
    (music) => music.sliderValue
);
