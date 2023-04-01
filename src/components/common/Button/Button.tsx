import React, { useEffect, useState } from 'react';
import type { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = React.memo(
    React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
        const [style, setStyle] = useState(
            'inline-flex text-white mt-4 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded-full text-base md:text-lg'
        );

        useEffect(() => {
            switch (props.variant) {
                case 'solid':
                    setStyle(prev => `${prev} bg-purple-600 border-0`);
                    break;

                case 'flat':
                    setStyle(prev => `${prev} bg-transparent border-0`);

                    break;
                case 'outlined':
                    setStyle(
                        prev =>
                            `${prev} bg-transparent hover:transparent border-2 border-purple-700`
                    );
                    break;

                default:
                    break;
            }
        }, [props.variant]);

        return (
            <button
                ref={ref}
                {...props}
                className={`${style} ${props.className}`}
            >
                {React.Children.map(props.children, c => c)}
            </button>
        );
    })
);

Button.defaultProps = {
    type: 'button',
    variant: 'solid',
    disabled: false
};

Button.displayName = 'Button';
