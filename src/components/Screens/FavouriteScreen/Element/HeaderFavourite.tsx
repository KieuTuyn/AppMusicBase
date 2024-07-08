import * as React from "react";
import {View, TouchableOpacity, StyleSheet} from "react-native";
import Back from "../../../../assets/IconSvgs/Back.svg";
import ScaleTim from "../../../../constants/Animation/ScaleTim.tsx";
import Download from "../../../../assets/IconSvgs/Download.svg";
import {useNavigation} from "@react-navigation/native";
import {ratioH, ratioW} from "../../../../utils/RatioScale.tsx";
import {useEffect} from "react";

const HeaderFavourite = () =>{
    const navigation = useNavigation();
    return(

        <View style={styles.Container}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
                hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}>
                <Back />
            </TouchableOpacity>

            <View style={styles.headingAction}>
                <ScaleTim />
                <Download/>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        height: ratioH(32),
        paddingLeft: ratioW(24),
        paddingTop:24

    },

    headingAction: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        top: 24,
        gap: ratioW(18),
        paddingRight: ratioW(18)
    },
})
export default HeaderFavourite;
