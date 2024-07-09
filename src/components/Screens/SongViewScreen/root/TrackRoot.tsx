import TrackPlayer, { Event, RepeatMode, State, useProgress, useTrackPlayerEvents } from "react-native-track-player";
import React, { useEffect, useState } from "react";
import {connect, useDispatch, useSelector} from 'react-redux';
import { playPause, seekTo, setMusicData, setRepeatMode, skipToNext, skipToPrevious } from '../../../../redux/action'
import PlayerSong from "../Element/PlayerSong";
import { HeaderSong } from "../Element/HeaderSong";
import { InfoSong } from "../Element/InfoSong";
import ControllerSong from "../Element/ControllerSong";
import {getIsPlaying, getSliderValue} from "../../../../redux/selectors.tsx";

const TrackRoot = ({ dataMusic, setMusicData,repeatMode}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const { position, duration } = useProgress();
  const dispatch = useDispatch();
  const events = [Event.PlaybackState, Event.PlaybackTrackChanged];

  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackState) {
      dispatch(playPause());
    }
    if (event.type === Event.PlaybackTrackChanged) {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex === dataMusic.length - 1) {
        if (repeatMode === RepeatMode.Track) {
          await TrackPlayer.seekTo(0);
          await TrackPlayer.play();
        } else if (repeatMode === RepeatMode.Queue) {
          await TrackPlayer.skip(0);
        }
      }
    }
  });

  useEffect(() => {
    const setupPlayer = async () => {
      setIsLoading(true);
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(dataMusic);

      } catch (err) {
        setLoadError(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    setupPlayer();

    return () => {
      TrackPlayer.stop();
    };
  }, [dataMusic]);

  useEffect(() => {
    dispatch(seekTo(position));
  }, [position]);

  const handleSliderValueChange = (value) => {
    dispatch(seekTo(value));
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
    dispatch(skipToPrevious());
    await TrackPlayer.skipToPrevious();
  };

  const handleSkipToNext = async () => {
    dispatch(skipToNext());
    await TrackPlayer.skipToNext();
  };

  const handleRepeatMode = async () => {
    let newRepeatMode;
    if (repeatMode === RepeatMode.Off) {
      newRepeatMode = RepeatMode.Track;
    } else if (repeatMode === RepeatMode.Track) {
      newRepeatMode = RepeatMode.Queue;
    } else {
      newRepeatMode = RepeatMode.Off;
    }

    dispatch(setRepeatMode(newRepeatMode));
    await TrackPlayer.setRepeatMode(newRepeatMode);
    console.log("Repeat mode:", newRepeatMode);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
      <>
        <HeaderSong />
        <InfoSong />
        <PlayerSong
            isLoading={isLoading}
            isPlaying={useSelector(getIsPlaying)}
            position={position}
            duration={duration}
            sliderValue={useSelector(getSliderValue)}
            handlePlayPause={handlePlayPause}
            handleSkipToPrevious={handleSkipToPrevious}
            handleSkipToNext={handleSkipToNext}
            formatTime={formatTime}
            handleSliderValueChange={handleSliderValueChange}
        />
        <ControllerSong
            repeatMode={repeatMode}
            handleRepeatMode={handleRepeatMode}
        />
      </>
  );
};

const mapStateToProps = (state) => ({
  dataMusic: state.music.dataMusic,
  repeatMode: state.music.repeatMode,
});

const mapDispatchToProps = {
  setMusicData,
  playPause,
  skipToPrevious,
  skipToNext,
  seekTo,
  setRepeatMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackRoot);
