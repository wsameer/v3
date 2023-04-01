import React, { HTMLProps, ReactNode } from 'react';

interface SectionProps extends Omit<HTMLProps<HTMLDivElement>, 'id'> {
    id: string;
    children: ReactNode | undefined
}

export const Section: React.FC<SectionProps> = React.memo(
    React.forwardRef((props, ref) => {
        return (
            <section
                className="text-gray-400 bg-gray-800 md:ml-6 md:mb-6 shadow-lg"
                ref={ref}
                {...props}
            >
                {props.children}
            </section>
        );
    })
);

Section.displayName = 'Section';
