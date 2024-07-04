import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  OnboardingScreen  from './assets/component/Screens/OnboardingScreen';
import HomeScreen from './assets/component/Screens/HomeScreen';
import SongToSing from './assets/component/Screens/SongToSing';
import PartySong from './assets/component/Screens/PartySong';
import ChillHits from './assets/component/Screens/ChillHits';
import SongViewScreen from './assets/component/Screens/SongViewScreen';
import TestScreen from './assets/component/Screens/ScaleTim.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SongToSing" component={SongToSing} />
            <Stack.Screen name="PartySong" component={PartySong} />
            <Stack.Screen name="ChillHits" component={ChillHits} />
            <Stack.Screen name="SongViewScreen" component={SongViewScreen} />
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

