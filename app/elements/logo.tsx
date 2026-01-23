'use client';

import {Icon, addIcon} from '@iconify-icon/react';
import { CSSProperties } from 'react';

addIcon('@custom:site:logo',{
    body: `<path
       fill=\"currentColor\"
       d=\"M 0,0 H 456 V 456 H 0 Z\" />
<path
  fill=\"#ffffff\"
  d=\"m 83.400089,147.79995 c 0,0 -10.646447,-0.58576 -11,-12.5 -0.353553,-11.91424 11,-12.5 11,-12.5 H 150.40009 L 150.4,29.299998 h 158 l 9e-5,93.499952 h 75 c 0,0 7,-1.11435 7,12.5 0,13.61435 -7,12.5 -7,12.5 z\" />
  <g
       transform=\"translate(5.8999997,-1.6000019)\">
      <path
         fill=\"#ffffff\"
         d=\"m 298.39904,131.09473 a 91.216774,19.445436 0 0 1 -45.77879,16.85086 91.216774,19.445436 0 0 1 -91.34479,-0.0578 91.216774,19.445436 0 0 1 -45.30862,-16.90852\"
         transform=\"matrix(1.1730299,0,0,4.55229,-17.637007,-439.37359)\" />
      <path
         fill=\"currentColor\"
         transform=\"translate(173.085,83.439)\"
         d=\"M 113.5,100 A 13.5,13.5 0 0 1 100,113.5 13.5,13.5 0 0 1 86.5,100 13.5,13.5 0 0 1 100,86.5 13.5,13.5 0 0 1 113.5,100 Z\" />
      <path
         fill=\"currentColor\"
         transform=\"translate(76.667,83.4386)\"
         d=\"M 113.5,100 A 13.5,13.5 0 0 1 100,113.5 13.5,13.5 0 0 1 86.5,100 13.5,13.5 0 0 1 100,86.5 13.5,13.5 0 0 1 113.5,100 Z\" />
      <g
         transform=\"translate(-1.1,-3.2)\">
        <path
           stroke=\"currentColor\"
           fill=\"none\"
           d=\"m 202.3,171.679 h -52 v 29.755 h 52 z\" />
        <path
           stroke=\"currentColor\"
           fill=\"none\"
           d=\"m 202.2,187 c 0,0 9.62528,-6.5 23.3,-6.5 13.67472,0 22.8,6.5 22.8,6.5\" />
        <path
           d=\"m 300.9,171.679 h -52 v 29.755 h 52 z\"
           stroke=\"currentColor\"
           fill=\"none\" />
      </g>
<g>
      <path
         fill=\"#ffffff\"
         d=\"M 60,456 V 276 c 0.803326,-23.78935 8.656899,-22.14858 29,-22 h 59 L 228,413.8 308,254 h 59 c 16.91138,-0.8358 30.0533,2.4525 29,22 V 456 H 342 V 373.86735 C 342,373.86735 342.90458,360 327.5,360 312.09542,360 313,373.86735 313,373.86735 V 456 H 143 v -83.03968 c 0,0 -0.5145,-12.89506 -14.5,-12.96032 -13.9855,-0.0653 -14.5,15.68141 -14.5,15.68141 V 456 Z\" />
</g>
<g>
      <path
         fill=\"#ffffff\"
         d=\"M 153,254 228,400.3 303,254 Z\" />
      <g
         transform=\"translate(3.7,-0.6)\">
        <path
           fill=\"currentColor\"
           d=\"m 188.4,261.7 v 37 l 19,-8 v -17 z\" />
        <path
           fill=\"currentColor\"
           transform=\"translate(0,-1.5)\"
           d=\"m 239,283 a 14,14 0 0 1 -14,14 14,14 0 0 1 -14,-14 14,14 0 0 1 14,-14 14,14 0 0 1 14,14 z\" />
        <path
           fill=\"currentColor\"
           d=\"m 242.6,273.7 v 17 l 20,8 v -37 z\" />
      </g>
      <path
         fill=\"currentColor\"
         transform=\"translate(0,176.5)\"
         d=\"m 233.7,142 a 5,5 0 0 1 -5,5 5,5 0 0 1 -5,-5 5,5 0 0 1 5,-5 5,5 0 0 1 5,5 z\" />
      <path
         fill=\"currentColor\"
         transform=\"translate(0,201.3)\"
         d=\"m 233.7,142 a 5,5 0 0 1 -5,5 5,5 0 0 1 -5,-5 5,5 0 0 1 5,-5 5,5 0 0 1 5,5 z\" />
      <path
         fill=\"currentColor\"
         transform=\"translate(0,227.1)\"
         d=\"m 233.7,142 a 5,5 0 0 1 -5,5 5,5 0 0 1 -5,-5 5,5 0 0 1 5,-5 5,5 0 0 1 5,5 z\" />
    </g>`,
    width: 456,
    height: 456,
});

interface LogoProps {
    width?: string | number,
    height?: string | number,
    style?: CSSProperties
}

export default function Logo({width, height, style}: LogoProps){
    return <Icon id="logo" icon="@custom:site:logo" width={width} height={height} style={style} />
}