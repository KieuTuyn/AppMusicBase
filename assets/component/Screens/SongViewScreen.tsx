import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { ratioH, ratioW } from "../utils/RatioScale";
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
import TrackPlayer, {  State, usePlaybackState, useProgress, Event, RepeatMode } from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const SongViewScreen = () => {
  const navigation = useNavigation();
  const playbackState = usePlaybackState();
  const { position, duration } = useProgress();
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [repeatMode, setRepeatMode] = useState(RepeatMode.Off); // Using RepeatMode enum

  const playlist = [
    {
      url: "https://onlinetestcase.com/wp-content/uploads/2023/06/1-MB-MP3.mp3", 
      title: "Highway to hell",
      artist: "ACDC",
    },
    {
      url: "https://vnno-zn-5-tf-a128-z3.zmdcdn.me/6f2731d30a15aa8f218f7257548a4b4b?authen=exp=1720082407~acl=/6f2731d30a15aa8f218f7257548a4b4b/*~hmac=b736b324345940c5f9f3e3c6afa1f895&fs=MTmUsICxOTkwOTYwNzUyN3x3ZWJWNHwxLjU0LjmUsICdUngMTA0", 
      title: "Bài hát 2",
      artist: "Nghệ sĩ B",
    },
  ];

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

    return () => {
      TrackPlayer.stop();
      trackChangedListener.remove();
    };
  }, []);

  useEffect(() => {
    if (playbackState === State.Playing || playbackState === State.Buffering) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [playbackState]);

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
              <TouchableOpacity onPress={handleSkipToPrevious}>
                <FastForward />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                {
                  isPlaying ? (
                    <ButtonPause />
                  ) : (
                    <ButtonPlay />
                  )
                }
              </TouchableOpacity> 
              <TouchableOpacity onPress={handleSkipToNext}>
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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: ratioH(36),
    gap: 16,
    backgroundColor: '#a6b9ff'
  },
  TaskBar: {
    flexDirection: 'row',
    paddingHorizontal: ratioW(16),
    height: ratioH(40),
  },
  HeadingButtonBack: {},
  HeadingAction: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 0,
    gap: ratioW(18),
    paddingRight: ratioW(18)
  },
  PlaySongContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingTop: 48,
    gap: 24,
    alignItems: 'center',
    borderTopLeftRadius: ratioW(16),
    borderTopRightRadius: ratioW(16)
  },
  ImageSongPlay: {
    height: ratioH(231),
    width: ratioW(231),
    alignItems: 'center',
    justifyContent: 'center',
  },
  DescribeSongPlay: {
    height: ratioH(79),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  TextSongTitle: {
    fontSize: ratioH(24),
    fontFamily: 'Poppins-SemiBold',
    color: "#191D21"
  },
  TextSongAuthor: {
    fontSize: ratioH(14),
    fontFamily: 'Poppins-Regular'
  },
  PlayStop: {
    height: ratioH(80),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  TimeSongPlay: {
    height: ratioH(48),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  ContainerButtonSongPlay: {
    flex: 1,
    bottom: ratioH(0),
    position: 'absolute',
    height: ratioH(80),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6b9ff',
    borderTopLeftRadius: ratioW(16),
    borderTopRightRadius: ratioW(16)
  },
  ButtonSongPlay: {
    flexDirection: 'row',
    gap: 16,
    height: ratioH(64),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a6b9ff',

  },
  ButtonAction: {
    height: ratioH(64),
    width: ratioW(99),
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageStyle: {
    height: ratioH(199),
    width: ratioW(199),
    borderRadius: 20,
    objectFit: 'contain'
  },
  ProgressImageStyle: {
    position: 'absolute',
    height: ratioH(231),
    width: ratioW(231),
    objectFit: 'contain'
  },
  SliderImageStyle: {
    position: 'absolute',
    height: ratioH(16),
    width: ratioW(16),
    bottom: 0,
    right: ratioW(140),
    objectFit: 'contain'
  },
  progressBar: {
    width: ratioW(207),
    height: ratioH(6),
  },
  sliderContainer: {
    width: ratioW(207),
    height: ratioH(16),
    borderRadius: 10,
    overflow: 'hidden',
  },
  slider: {
    flex: 1,
  },
});

export default SongViewScreen;