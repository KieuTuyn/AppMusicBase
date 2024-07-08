import React, {useContext, useState} from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withRepeat,
    withTiming,
    Easing
} from 'react-native-reanimated';
import { ratioH, ratioW } from "../../../../utils/RatioScale.tsx";
import MusicProgrressBarAll from "../../../../assets/IconSvgs/MusicProgrressBarAll.svg";
import SliderIcon from "../../../../assets/IconSvgs/Slider.svg";
import TrackContext from "../root/TrackContext.tsx";

const duration = 10000;
const easing = Easing.linear;
export const  InfoSong = () => {
    const {
        isPlaying
    } = useContext(TrackContext);

    const sv = useSharedValue(0);
    React.useEffect(() => {
        sv.value = withRepeat(withTiming(1, { duration, easing }), 1);
    }, []);

    const animatedStyle1  = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * -360}deg` }],
    }));
    const animatedStyle2  = useAnimatedStyle(() => ({
        transform: [{ rotate: `${sv.value * 360}deg` }],
    }));

    return (
        <View style={styles.container}>

            <View style={styles.InfoImage}>
                <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.View style={[animatedStyle2, {position: 'absolute'}]}>
                        <View style={{
                            width:ratioW(231),
                            height:ratioH(231),
                            top:ratioH(82)
                        }}>

                            <SliderIcon  />
                        </View>

                    </Animated.View>

                    <MusicProgrressBarAll width={ratioW(231)} height={ratioH(231)} />
                    <Animated.View style={[animatedStyle1, {position: 'absolute'}]}>
                        <Image
                            source={require("../../../../assets/images/Highway.png")}
                            style={styles.ImageStyle}
                            resizeMode={'contain'}
                        />
                    </Animated.View>

                </View>
            </View>


            <View style={styles.Text}>
                <Text style={styles.TextSongTitle}>Highway to hell</Text>
                <Text style={styles.TextSongAuthor}>ACDC</Text>
            </View>

        </View>

    );
}
export const styles = StyleSheet.create({
    container:{
        height: ratioH(382),
        top:ratioH(16),
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    InfoImage:{
        height: ratioH(231),
        width: ratioW(231),
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text: {
        top:ratioH(24),
        height: ratioH(79),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextSongTitle: {
        fontSize: ratioH(24),
        fontFamily: 'Poppins-SemiBold',
        color: "#191D21"
    },
    TextSongAuthor: {
        fontSize: ratioH(14),
        fontFamily: 'Poppins-Regular'
    },
    ImageStyle: {
        height: ratioH(199),
        width: ratioW(199),

        // backgroundColor:'red'
    },
})
