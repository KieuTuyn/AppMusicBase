import * as React from "react";
import { View, StyleSheet} from "react-native";
import {ratioH} from "../../../utils/RatioScale.tsx";
import HeaderFavourite from "./Element/HeaderFavourite.tsx";
import BannerFavourite from "./Element/BannerFavourite.tsx";
import ListFavourite from "./Element/ListFavourite.tsx";

const FavouriteScreen = () =>{

    return(
        <View style={styles.Container}>
            <View style={{

                backgroundColor:'#ffa433',
                borderBottomRightRadius:ratioH(48),
                borderBottomLeftRadius:ratioH(48),
                bottom:ratioH(24),
                top:0,
            }}>
                < HeaderFavourite/>
                < BannerFavourite/>
            </View>
            < ListFavourite/>

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'column',

    },
})
export default FavouriteScreen;
