import {Image} from "react-native";
import {ratioH, ratioW} from "../../utils/RatioScale.tsx";
import * as React from "react";

export const BackgroundImage = () => {
    return (
        <Image
            source={require('../../assets/images/background.png')}
            style={{
                position: 'absolute',
                top: ratioW(62),
                right:ratioH(-210),
                height: ratioH(941),
                width: ratioW(986),
            }}
        />
    )
}
export const TheBandImage = () => {
    return (
        <Image
            source={require('../../assets/images/Illustrution.png')}
            style={{
                position: 'absolute',
                left: 0,
                height: ratioH(342),
                width: ratioW(314),
                gap: ratioW(8)

            }}
        />
    )
}
export const TheBandBeamNotese = () => {
    return (
        <Image
            source={require('../../assets/images/TheBandBeamNotes.png')}
            style={{
                position: 'absolute',
                height: ratioH(24),
                width: ratioW(24),

            }}
        />
    )
}
