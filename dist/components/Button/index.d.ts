import * as React from 'react';
export declare type ButtonProps = {
    children: React.ReactChild;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
};
declare const Button: ({ variant, children, onClick }: ButtonProps) => JSX.Element;
export default Button;
