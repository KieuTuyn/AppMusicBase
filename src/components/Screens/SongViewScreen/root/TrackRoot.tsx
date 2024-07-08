import TrackPlayer, { Event, RepeatMode, State, useProgress, useTrackPlayerEvents } from "react-native-track-player";
import React, { useEffect, useState } from "react";
import {DataMusic} from "../../../../data/DataMusic.tsx";
import  TrackContext  from "./TrackContext.tsx";
import {PlayerSong} from "../Element/PlayerSong.tsx";
import {HeaderSong} from "../Element/HeaderSong.tsx";
import {InfoSong} from "../Element/InfoSong.tsx";
import {ControllerSong} from "../Element/ControllerSong.tsx";

export const TrackRoot = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Off);
  const {position, duration } = useProgress();
  const [sliderValue, setSliderValue] = useState(0);

  const events = [
    Event.PlaybackState,
  ];
  useTrackPlayerEvents(events, (event) => {
    if (event.type === Event.PlaybackState) {
      setIsPlaying(event.state === State.Playing);

    }
  });

  useEffect(() => {
    const setupPlayer = async () => {
      setIsLoading(true);
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(DataMusic);

      } catch (err) {
        setLoadError(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    setupPlayer();

    const trackChangedListener = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex === DataMusic.length - 1) {
        if (repeatMode === RepeatMode.Track) {
          await TrackPlayer.seekTo(0);
          await TrackPlayer.play();
        } else if (repeatMode === RepeatMode.Queue) {
          await TrackPlayer.skip(0);
        }
      }
    });

    return () => {
      TrackPlayer.stop();
      trackChangedListener.remove();
    };
  }, []);

  // Cập nhật sliderValue khi position thay đổi
  useEffect(() => {
    setSliderValue(position);
  }, [position]);
  const handleSliderValueChange = (value) => {
    setSliderValue(value);
    TrackPlayer.seekTo(value);
  };

  const handlePlayPause = async () => {

    const currentPlaybackState = await TrackPlayer.getState();

    if (currentPlaybackState === State.Playing || currentPlaybackState === State.Buffering) {
      await TrackPlayer.pause();
    } else if (currentPlaybackState === State.Paused || currentPlaybackState === State.Ready) {
      await TrackPlayer.play();
    } else {
      console.log("Current Playback State:", currentPlaybackState);
    }
  };

  const handleSkipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();

  };

  const handleSkipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  const handleRepeatMode = async () => {
    // Cycle through RepeatMode enum values
    if (repeatMode === RepeatMode.Off) {
      setRepeatMode(RepeatMode.Track);
    } else if (repeatMode === RepeatMode.Track) {
      setRepeatMode(RepeatMode.Queue);
    } else {
      setRepeatMode(RepeatMode.Off);
    }

    await TrackPlayer.setRepeatMode(repeatMode);
    console.log("Repeat mode:", repeatMode);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
      <TrackContext.Provider
          value={{
            isLoading,
            loadError,
            isPlaying,
            repeatMode,
            position,
            duration,
            handlePlayPause,
            handleSkipToPrevious,
            handleSkipToNext,
            handleRepeatMode,
            sliderValue,
            formatTime,
            handleSliderValueChange
          }}
      >

        <HeaderSong />
        <InfoSong />
        <PlayerSong />
        <ControllerSong />
    </TrackContext.Provider>
  );
};
