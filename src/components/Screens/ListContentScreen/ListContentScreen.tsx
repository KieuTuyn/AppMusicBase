import * as React from "react";
import {Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet} from "react-native";
import HeaderContent from "./Element/HeaderContent.tsx"
import {ratioH} from "../../../utils/RatioScale.tsx";
import BannerContent from "./Element/BannerContent.tsx";
import ListSongContents from "./Element/ListSongContents.tsx";

const ListContentScreen = () =>{

    return(
        <View style={styles.Container}>
            <View style={{

                backgroundColor:'#a6b9ff',
                borderBottomRightRadius:ratioH(48),
                borderBottomLeftRadius:ratioH(48),
                bottom:ratioH(24),
                top:0,
            }}>
                < HeaderContent/>
                < BannerContent/>
            </View>
            < ListSongContents/>

        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: 'column',

    },
})
 export default ListContentScreen;
