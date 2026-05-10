import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function IdentityIcon({ size = 24, color = '#5F15EE' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9998 12.2C13.2148 12.2 14.1998 11.2151 14.1998 10C14.1998 8.78502 13.2148 7.80005 11.9998 7.80005C10.7848 7.80005 9.7998 8.78502 9.7998 10C9.7998 11.2151 10.7848 12.2 11.9998 12.2Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 15.9996C9.3 14.3996 10.5 13.5996 12 13.5996C13.5 13.5996 14.7 14.3996 15.5 15.9996"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
