import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
};

export default function FaceGraphic({ width = 77, height = 69, color = '#5F15EE', style }: Props) {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 77 69" fill="none">
        <G opacity="0.2">
          <Path
            d="M0.75 15.7481V5.74938C0.75 4.42346 1.27672 3.15185 2.21429 2.21429C3.15185 1.27672 4.42346 0.75 5.74938 0.75H18.2478"
            stroke={color}
            strokeWidth="1.49981"
          />
          <Path
            d="M75.7503 15.7481V5.74938C75.7503 4.42346 75.2236 3.15185 74.286 2.21429C73.3484 1.27672 72.0768 0.75 70.7509 0.75H58.2524"
            stroke={color}
            strokeWidth="1.49981"
          />
          <Path
            d="M23.2536 43.2465C24.6341 43.2465 25.7533 42.1273 25.7533 40.7468C25.7533 39.3662 24.6341 38.2471 23.2536 38.2471C21.8731 38.2471 20.7539 39.3662 20.7539 40.7468C20.7539 42.1273 21.8731 43.2465 23.2536 43.2465Z"
            fill={color}
            stroke={color}
            strokeWidth="1.49981"
          />
          <Path
            d="M53.2448 43.2465C54.6253 43.2465 55.7445 42.1273 55.7445 40.7468C55.7445 39.3662 54.6253 38.2471 53.2448 38.2471C51.8643 38.2471 50.7451 39.3662 50.7451 40.7468C50.7451 42.1273 51.8643 43.2465 53.2448 43.2465Z"
            fill={color}
            stroke={color}
            strokeWidth="1.49981"
          />
          <Path
            d="M23.2437 63.2441C28.243 68.2435 48.2406 68.2435 53.2399 63.2441"
            stroke={color}
            strokeWidth="1.49981"
          />
        </G>
      </Svg>
    </View>
  );
}
