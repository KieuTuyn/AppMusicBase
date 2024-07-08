import * as React from "react";
import {StyleSheet, View} from "react-native";
import {HeaderHome} from "./Element/HeaderHome.tsx";
import SearchHome from "./Element/SearchHome.tsx";
import DiscoverHome from "./Element/DiscoverHome.tsx";
import {ratioH, ratioW} from "../../../utils/RatioScale.tsx";
const HomeScreen = () => {

  return (
    <View style={styles.containerHome}>

        <HeaderHome/>
        <SearchHome/>
        <DiscoverHome/>

      </View>


  );
};

export const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    home: {
        flex: 1,


    },

    homeContainerList: {
        top: ratioH(32),
        flex: 1,
        gap: ratioW(20),

    },
})
export default HomeScreen;
