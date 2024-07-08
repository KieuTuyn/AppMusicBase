import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  OnboardingScreen  from './src/components/Screens/OnboardingScreen/OnboardingScreen.tsx';
import HomeScreen from './src/components/Screens/HomeScreen/HomeScreen.tsx';
import MusicCatalogScreen from './src/components/Screens/ListContentScreen/MusicCatalogScreen.tsx';
import PartySong from './src/components/Screens/ListContentScreen/PartySong.tsx';
import ChillHits from './src/components/Screens/ListContentScreen/ChillHits.tsx';
import SongViewScreen from './src/components/Screens/SongViewScreen/SongViewScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FavouriteScreen from "./src/components/Screens/FavouriteScreen/FavouriteScreen.tsx";
import {Provider} from "react-redux";
import store from "./src/redux/store.tsx";

const Stack = createStackNavigator();
const App = () => {

  return (
      <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/*<Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />*/}
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MusicCatalogScreen" component={MusicCatalogScreen} />
            <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
            <Stack.Screen name="SongViewScreen" component={SongViewScreen} />

        </Stack.Navigator>
    </NavigationContainer>
      </Provider>
  );
};

export default App;

