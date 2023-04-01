import React from 'react';
import type { TextProps } from './types';

export const Text: React.FC<TextProps> = React.memo(
    ({ className, children }) => {
        return <p className={`${className}`}>{children}</p>;
    }
);

Text.displayName = 'Text';
