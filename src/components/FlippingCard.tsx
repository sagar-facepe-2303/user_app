import ProcessingCardIcon from '@/components/ProcessingCardIcon';
import React, { useEffect } from 'react';
import Animated, {
  Easing,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  size?: number;
  duration?: number;
};

export default function FlippingCard({ size = 80, duration = 2000 }: Props) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration, easing: Easing.inOut(Easing.ease) }),
      -1,
      false
    );
    return () => cancelAnimation(rotation);
  }, [duration, rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 800 },
      { rotateY: `${-rotation.value}deg` },
    ],
  }));

  return (
    <Animated.View style={animatedStyle}>
      <ProcessingCardIcon size={size} />
    </Animated.View>
  );
}
