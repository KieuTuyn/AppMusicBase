
import {Image, Text,View} from "react-native";
import Settings from "../../../../assets/IconSvgs/Settings.svg";
import React from "react";
import { StyleSheet } from "react-native";
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";

export const HeaderHome =()=>{

    return(

        <View style={styles.Container}>

            <View style={styles.IconMic}>
                <Image
                    source={require('../../../../assets/images/Logo.png')}
                    style={{ width: ratioW(32), height: ratioH(32)}}
                />
            </View>

            <View style={styles.Title}>
                <Text style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: ratioH(32),
                    color: "#191D21",
                    bottom:ratioH(5)
                }}>Hi,</Text>
                <Text style={styles.Name}> Tuyên Kiều</Text>
            </View>

            <View style={styles.Settings}>
                <Settings />
            </View>

        </View>

    )
}
export const styles = StyleSheet.create({
    Container:{
        height: ratioH(41),
        flexDirection: 'row',
        paddingLeft: ratioW(24),
        top: ratioH(24),
    },
    Title: {
        height: ratioH(41),
        flexDirection: "row",
        marginHorizontal: ratioW(18),

    },

    Name: {

        fontFamily: "Poppins-SemiBold",
        fontSize: ratioH(32),
        color: "#191D21",
        bottom:ratioH(5),

    },
    IconMic:{
        height: ratioH(32),
        width:ratioW(32),
        alignItems: 'center',

    },
    Settings:{
        height: ratioH(32),
        width:ratioW(32),
        bottom:ratioH(5),
        position: 'absolute',
        top:0,
        right:0,
        marginRight:ratioW(24),
        alignItems: 'center',
        resizeMode:'contain'
    }
})
