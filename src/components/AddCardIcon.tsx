import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function AddCardIcon({ size = 24, color = '#5F15EE' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.0039 21.998C17.5268 21.998 22.0039 17.5209 22.0039 11.998C22.0039 6.4752 17.5268 1.99805 12.0039 1.99805C6.48106 1.99805 2.00391 6.4752 2.00391 11.998C2.00391 17.5209 6.48106 21.998 12.0039 21.998Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 7.99805V15.998"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00391 12H16.0039"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
