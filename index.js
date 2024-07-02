
import { AppRegistry } from 'react-native';
import App from './App'; // Your root component
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent('UIBase', () => App);
TrackPlayer.registerPlaybackService(() => require('./service.js'));