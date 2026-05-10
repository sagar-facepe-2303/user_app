import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

export default function GlanceIcon({ size = 24, color = '#5F15EE' }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 7V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 7V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 17V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 17V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0002 11.8C10.442 11.8 10.8002 11.4418 10.8002 11C10.8002 10.5581 10.442 10.2 10.0002 10.2C9.55837 10.2 9.2002 10.5581 9.2002 11C9.2002 11.4418 9.55837 11.8 10.0002 11.8Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.0002 11.8C14.442 11.8 14.8002 11.4418 14.8002 11C14.8002 10.5581 14.442 10.2 14.0002 10.2C13.5584 10.2 13.2002 10.5581 13.2002 11C13.2002 11.4418 13.5584 11.8 14.0002 11.8Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 15C11 16 13 16 14 15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
