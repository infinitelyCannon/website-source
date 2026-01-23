'use client'

import {Icon as IconifyIcon} from '@iconify-icon/react';

interface IconProps {
    icon: string,
    width?: string | number,
    height?: string | number
}

export default function Icon ({icon, width, height}: IconProps){
    return <IconifyIcon icon={icon} width={width} height={height} />;
}