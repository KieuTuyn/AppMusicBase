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

export const BannerImage = () => {
    return renderBackgroundImage(require("../../assets/images/BannerFavourite.png"), 261, 375, 0 ,0);
};
export const Image1 = () => {
    return renderBackgroundImage(require("../../assets/images/ListFavourite.png"), 114, 203, 0 ,0);
};
