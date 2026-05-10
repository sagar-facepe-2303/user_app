import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function ShieldIcon({ size = 24, color = '#5F15EE' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 3.94043L12 0.44043L2 3.94043V12.0004C2 16.1274 4.534 19.0124 6.896 20.8034C8.32208 21.8739 9.88622 22.7468 11.546 23.3984C11.6593 23.4411 11.7733 23.4818 11.888 23.5204L12 23.5604L12.114 23.5204C12.3327 23.4445 12.5494 23.3631 12.764 23.2764C14.3097 22.6396 15.7681 21.8086 17.104 20.8034C19.467 19.0124 22 16.1274 22 12.0004V3.94043ZM11.001 15.4154L6.76 11.1724L8.174 9.75743L11.002 12.5864L16.659 6.92943L18.074 8.34343L11.001 15.4154Z"
        fill={color}
      />
    </Svg>
  );
}
