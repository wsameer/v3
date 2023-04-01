import type { HTMLProps } from 'react';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    as?: any;
    to?: string;
    variant?: 'solid' | 'flat' | 'outlined';
    disabled?: boolean;
    type?: 'button' | 'reset' | 'submit';
}
