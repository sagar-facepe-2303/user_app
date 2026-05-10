import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function BackIcon({ size = 20, color = '#101828' }: Props) {
  return (
    <Svg width={(size * 19) / 20} height={size} viewBox="0 0 19 20" fill="none">
      <Path
        d="M11.8791 14.9938L7.12744 9.99585L11.8791 4.99792"
        stroke={color}
        strokeWidth={1.66597}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
