import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import Heart_Like from '../../IconSvgs/Heart_Like.svg';
export default function ScaleTim() {
  const [isLike, setIsLike] = useState(false);
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const handlePress = () => {
    setIsLike(!isLike);

    scale.value = withSpring(1.5, {}, () => {
          scale.value = withSpring(1);
    })
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={handlePress}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
        <Animated.View style={scaleStyles}>
          <Heart_Like fill={isLike ? 'red' : 'white'}  />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
