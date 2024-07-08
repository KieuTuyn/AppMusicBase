import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  OnboardingScreen  from './src/components/Screens/OnboardingScreen/OnboardingScreen.tsx';
import HomeScreen from './src/components/Screens/HomeScreen/HomeScreen.tsx';
import ListContentScreen from './src/components/Screens/ListContentScreen/ListContentScreen.tsx';
import PartySong from './src/components/Screens/ListContentScreen/PartySong.tsx';
import ChillHits from './src/components/Screens/ListContentScreen/ChillHits.tsx';
import SongViewScreen from './src/components/Screens/SongViewScreen/SongViewScreen.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            {/*<Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />*/}
            {/*<Stack.Screen name="HomeScreen" component={HomeScreen} />*/}
            {/*<Stack.Screen name="ListContentScreen" component={ListContentScreen} />*/}
            {/*<Stack.Screen name="PartySong" component={PartySong} />*/}
            {/*<Stack.Screen name="ChillHits" component={ChillHits} />*/}
            <Stack.Screen name="SongViewScreen" component={SongViewScreen} />
        </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;

