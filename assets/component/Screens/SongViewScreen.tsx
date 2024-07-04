import { Image, Text, View, TouchableOpacity } from "react-native";
import Back from "../../IconSvgs/Back.svg";
import FastForward from "../../IconSvgs/FastForward.svg";
import ButtonPlay from "../../IconSvgs/ButtonPlay.svg";
import ButtonPause from "../../IconSvgs/ButtonPause.svg";
import FastForward2 from "../../IconSvgs/FastForward2.svg";
import Tim from "../../IconSvgs/Tim.svg";
import List from "../../IconSvgs/List.svg";
import NoRepeat from "../../IconSvgs/NoRepeat.svg";
import RepeatAll from "../../IconSvgs/RepeatAll.svg";
import RepeatOne from "../../IconSvgs/RepeatOne.svg";
import Download from "../../IconSvgs/Download.svg";
import React, { useState, useEffect } from 'react';
import TrackPlayer, {  State, useTrackPlayerEvents, usePlaybackState, useProgress, Event, RepeatMode } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { styles } from "../styles/StyleSongView";
import playlist from "../data/DataMusic"
const events = [
  Event.PlaybackState,
]
const SongViewScreen = () => {
  const navigation = useNavigation();
  const { position, duration } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Off); // Using RepeatMode enum

  // const playbackState = usePlaybackState();
  // const isPlaying = playerState === State.Playing;

  useTrackPlayerEvents(events, (event) => {
    if(event.type === Event.PlaybackState){
      setIsPlaying(event.state === State.Playing);
    }
    // alert(JSON.stringify(event))
  });

  useEffect(() => {
    const setupPlayer = async () => {
      setIsLoading(true);
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.add(playlist);
      } catch (err) {
        setLoadError(err);
      } finally {
        setIsLoading(false);
      }
    };

    setupPlayer();

    const trackChangedListener = TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (data) => {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex === playlist.length - 1) {
        if (repeatMode === RepeatMode.Track) { // ko lặp lại
          await TrackPlayer.seekTo(0);
          await TrackPlayer.play();
        } else if (repeatMode === RepeatMode.Queue) { // lặp lại tất cả
          await TrackPlayer.skip(0);
        }
      }
    });

  //     const trackChangedStateListener =  TrackPlayer.addEventListener(Event.PlaybackState, event => {
  //     if (event.state === State.Playing) {
  //         // When playing set userDidPause to false
  //         setIsPlaying(true);
  //     }
  //     else if (event.state === State.Paused) {
  //         //IF NOT PAUSED BY THE USER (IN CASE OF ISSUE) FORCE RETRY
  //         setIsPlaying(false);
  //     }
  // })

    console.log({isPlaying})

    return () => {
      TrackPlayer.stop();
      trackChangedListener.remove();
      // trackChangedStateListener.remove();

    };
  }, []);

  // useEffect(() => {
  //   if (playbackState === State.Playing || playbackState === State.Buffering) {
  //     setIsPlaying(true);
  //   } else {
  //     setIsPlaying(false);
  //   }
  // }, [playbackState]);

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
    <View style={styles.Container}>
      <View style={styles.TaskBar}>
        <TouchableOpacity
          style={styles.HeadingButtonBack}
          onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <View style={styles.HeadingAction}>
          <Download />
        </View>
      </View>
      <View style={styles.PlaySongContainer}>
        <View style={styles.ImageSongPlay}>
          <Image
            source={require("../../images/Highway.png")}
            style={styles.ImageStyle}
          />
          <Image
            source={require("../../images/MusicProgrress.png")}
            style={styles.ProgressImageStyle}
          />
          <Image
            source={require("../../images/Slider.png")}
            style={styles.SliderImageStyle}
          />
        </View>
        {isLoading && <Text>Đang tải nhạc...</Text>}
        {loadError && <Text>Lỗi: {loadError.message}</Text>}

        {!isLoading && !loadError && (
          <>

            <View style={styles.DescribeSongPlay}>
              <Text style={styles.TextSongTitle}>Highway to hell</Text>
              <Text style={styles.TextSongAuthor}>ACDC</Text>
            </View>
            <View style={styles.PlayStop}>
              <TouchableOpacity
                onPress={handleSkipToPrevious}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
                <FastForward />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                {
                  !isPlaying ? (
                    <ButtonPause />
                  ) : (
                    <ButtonPlay />
                  )
                }
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSkipToNext}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
                <FastForward2 />
              </TouchableOpacity>
            </View>
          </>
          )}


        <View style={styles.TimeSongPlay}>
          <Text>{formatTime(position)}</Text>
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={sliderValue}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor="black"
              maximumTrackTintColor="#ccc"
              thumbTintColor="black"
            />
          </View>
          <Text>{formatTime(duration)}</Text>
        </View>
        <View style={styles.ContainerButtonSongPlay}>
          <View style={styles.ButtonSongPlay}>
            <TouchableOpacity>
              <Tim />
            </TouchableOpacity>
            <View style={styles.ButtonAction}>
              <List />
            </View>
            <TouchableOpacity onPress={handleRepeatMode}>
              {repeatMode === RepeatMode.Off && <NoRepeat />}
              {repeatMode === RepeatMode.Track && <RepeatOne/>}
              {repeatMode === RepeatMode.Queue && <RepeatAll />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongViewScreen;
