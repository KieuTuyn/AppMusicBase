import * as React from "react";
import { Image} from "react-native";
import { ratioH, ratioW } from "../../utils/RatioScale.tsx";


  const renderBackgroundImage = (source, height, width, borderRadius) => {
    return (
        <Image
            source={source}
            style={{
              height: ratioH(height),
              width: ratioW(width),
              borderTopLeftRadius: borderRadius,
              borderTopRightRadius: borderRadius,
            }}
        />
    );
  };


export const ClassicHit = () => {
    return renderBackgroundImage(require("../../assets/images/Imageclasshit.png"), 200, 254, 16);
  };

export const Acoustic = () => {
    return renderBackgroundImage(require("../../assets/images/ImageAu.png"), 200, 254, 16);
  };
export const Top1 = () => {
    return renderBackgroundImage(require("../../assets/images/ImageTop1.png"), 200, 203, 16);
  };
export const Top2 = () => {
    return renderBackgroundImage(require("../../assets/images/ImageTop2.png"), 200, 203, 16);
  };
export const Top10=()=>{
    return renderBackgroundImage(require("../../assets/images/MusicTop10.png"), 200, 254, 16);

  }
export const Top=()=>{
    return renderBackgroundImage(require("../../assets/images/MusicTop10.png"), 200, 203, 16);

  }




