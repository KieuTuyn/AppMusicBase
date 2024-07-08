import * as React from "react";
import {Text, View,StyleSheet} from "react-native";
import {ratioH, ratioW} from "../../../../utils/RatioScale.tsx";
import {BannerImage} from "../../../../constants/RenderImages/Favourite.tsx";
const BannerFavourite = () =>{

    return(
        <View style={styles.Container}>

            <View style={styles.bannerImage}>
                {BannerImage()}
            </View>

            <View style={styles.bannerTitle}>
                <Text
                    style={styles.Title}
                >My Favourite List</Text>
                <Text
                    style={styles.textTitle}
                >Songs to sing in the shower</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        height: ratioH(375),
        width: '100%',
        top:ratioH(24)
    },
    bannerImage: {
        height: ratioH(280),
        width: '100%',

    },
    bannerTitle: {
        height: ratioH(60),
        width: '100%',
        paddingHorizontal:ratioW(38),
    },
    Title: {

        height:ratioW(34),
        fontSize:ratioW(24),
        fontFamily:'Poppins-SemiBold',
        color:'#191D21',

    },
    textTitle:{
        fontSize:ratioW(14),
        fontFamily:'Poppins-Medium',
        color:'#656F77',
    }
})
export default BannerFavourite;
