/*Button:
 Look: Filled with text | (inverted) transparent with colored text and border | optional icon
 Can be disabled
 */
import {Icon} from '@iconify-icon/react';
import clsx from 'clsx';

 interface ButtonProps{
    primary?: boolean,
    href?: string,
    size?: "large" | "small",
    fit?: boolean,
    disabled?: boolean,
    iconID?: string,
    children: React.ReactNode
 };

 export default function Button({primary, href, size, fit, disabled, iconID, children}: ButtonProps)
 {
    return (
        <a href={href} className={clsx(
            "button",
        {
            primary: primary,
            large: size === "large",
            small: size === "small",
            fit: fit,
            disabled: disabled,
            icon: iconID
        })}>
            {iconID && <Icon icon={iconID} height="1.4em" />}
            {children}
        </a>
    );
 }