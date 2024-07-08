import React, { createContext } from 'react';
import { RepeatMode } from 'react-native-track-player';

 const TrackContext = createContext({
  isLoading: false,
  loadError: null,
  isPlaying: false,
  repeatMode: RepeatMode.Off,
  position: 0,
  duration: 0,
  sliderValue: 0,
  handlePlayPause: function (){},
  handleSkipToPrevious: () => {},
  handleSliderValueChange:() =>{},
  handleSkipToNext: () => {},
  handleRepeatMode: () => {},
  formatTime: () => {},
});

export default TrackContext;
