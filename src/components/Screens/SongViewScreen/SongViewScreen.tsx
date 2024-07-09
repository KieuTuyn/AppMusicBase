// SongViewScreen.tsx
import { View } from "react-native";
import React from 'react';
import {HeaderSong} from "./Element/HeaderSong.tsx";
import {InfoSong} from "./Element/InfoSong.tsx";
import {ControllerSong} from "./Element/ControllerSong.tsx";
import {PlayerSong} from "./Element/PlayerSong.tsx";
import {TrackRoot} from "./root/TrackRoot.tsx";
const SongViewScreen = () => {
  return (
      <View style={{ flex:1 ,


      }}>
        <TrackRoot/>

      </View>
  );
};

export default SongViewScreen;
