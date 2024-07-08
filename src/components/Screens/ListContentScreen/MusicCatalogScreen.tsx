import * as React from "react";
import {Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import HeaderCatalog from "./Element/HeaderCatalog.tsx"
import {ratioH} from "../../../utils/RatioScale.tsx";
import BannerCatalog from "./Element/BannerCatalog.tsx";
import ListSongCatalog from "./Element/ListSongCatalog.tsx";

const MusicCatalogScreen = () =>{

    return(
        <View style={styles.Container}>
            <View style={{

                backgroundColor:'#a6b9ff',
                borderBottomRightRadius:ratioH(48),
                borderBottomLeftRadius:ratioH(48),
                bottom:ratioH(24),
                top:0,
            }}>
                < HeaderCatalog/>
                < BannerCatalog/>
            </View>
            < ListSongCatalog/>

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'column',

    },
})
 export default MusicCatalogScreen;
