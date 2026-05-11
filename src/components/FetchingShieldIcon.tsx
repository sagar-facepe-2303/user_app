import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
};

export default function FetchingShieldIcon({
  width = 220,
  height = 270,
  color = '#5F15EE',
  strokeWidth = 1.4,
}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 222 272" fill="none">
      <Path
        d="M110.7 0.734619L220.7 35.7346V135.735C220.7 205.735 110.7 270.735 110.7 270.735C110.7 270.735 0.700195 205.735 0.700195 135.735V35.7346L110.7 0.734619Z"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
