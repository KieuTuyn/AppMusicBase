
import { TouchableOpacity, View } from "react-native";
import Back from "../../../../assets/IconSvgs/Back.svg";
import Download from "../../../../assets/IconSvgs/Download.svg";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";
export const HeaderSong =()=>{
    const navigation = useNavigation();
    return(
        <View style={styles.Container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Back />
                </TouchableOpacity>
                <View style={styles.HeadingAction}>
                    <Download />
                </View>
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    Container:{
        height: ratioH(90),
        paddingTop: 36 ,
        paddingHorizontal: ratioW(16),
       backgroundColor:'#a6b9ff'
    },
    Header: {
        height: ratioH(40),
        flexDirection: 'row',
        //paddingHorizontal: ratioW(16),
    },
    HeadingAction: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        top: 0,
        gap: ratioW(18),
        paddingRight: ratioW(18)
    },
})
