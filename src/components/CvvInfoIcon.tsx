import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function CvvInfoIcon({ size = 18, color = '#808080' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <G clipPath="url(#clip0_1_5614)">
        <Path
          d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
          stroke={color}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 12V9"
          stroke={color}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 6H9.0075"
          stroke={color}
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_5614">
          <Rect width="18" height="18" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
