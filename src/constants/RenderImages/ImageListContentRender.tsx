import {Image} from "react-native";
import {ratioH, ratioW} from "../../utils/RatioScale.tsx";
import * as React from "react";

const renderBackgroundImage = (source, heights, widths, borderTopRadius, borderBottomRadius) => {
    return (
        <Image
            source={source}
            style={{
                height: ratioH(heights),
                width: ratioW(widths),
                borderTopLeftRadius: borderTopRadius,
                borderTopRightRadius: borderTopRadius,
                borderBottomLeftRadius: borderBottomRadius,
                borderBottomRightRadius: borderBottomRadius,

            }}
        />
    );
};

export const HeadingImage = () => {
    return renderBackgroundImage(require("../../assets/images/ImageSongTitle.png"), 261, 375, 0 ,0);
};
export const BohemianRapsody = () => {
    return renderBackgroundImage(require("../../assets/images/BohemianRapsody.png"), 96, 96, 0, 0);
};
export const IWillAlwaysLoveYou = () => {
    return renderBackgroundImage(require("../../assets/images/IWillAlwaysLoveYou.png"), 96, 96, 0, 0);
};
export const AllStar = () => {
    return renderBackgroundImage(require("../../assets/images/AllStar.png"), 96, 96, 0, 0);
};
export const DancingQueen = () => {
    return renderBackgroundImage(require("../../assets/images/DancingQueen.png"), 96, 96, 0, 0);
};
