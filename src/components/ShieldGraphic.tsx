import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { G, Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  style?: ViewStyle;
};

export default function ShieldGraphic({ width = 77, height = 69, color = '#5F15EE', style }: Props) {
  return (
    <View style={style}>
      <Svg width={width} height={height} viewBox="0 0 77 69" fill="none">
        <G opacity="0.2">
          <Path
            d="M38.1481 0.683838L75.6498 13.6144V48.0959C75.6498 71.8019 38.1481 93.3528 38.1481 93.3528C38.1481 93.3528 0.646484 71.8019 0.646484 48.0959V13.6144L38.1481 0.683838Z"
            stroke={color}
            strokeWidth="1.29306"
          />
          <Path
            d="M38.1343 48.0945C42.8684 48.0945 46.7061 44.235 46.7061 39.4741C46.7061 34.7132 42.8684 30.8538 38.1343 30.8538C33.4002 30.8538 29.5625 34.7132 29.5625 39.4741C29.5625 44.235 33.4002 48.0945 38.1343 48.0945Z"
            stroke={color}
            strokeWidth="1.29306"
          />
          <Path
            d="M23.1421 65.3436C27.428 54.5681 48.8575 54.5681 53.1434 65.3436"
            stroke={color}
            strokeWidth="1.29306"
          />
        </G>
      </Svg>
    </View>
  );
}
