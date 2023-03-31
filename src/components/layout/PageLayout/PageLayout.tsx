import React, { HTMLProps } from 'react';

export const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(
    ({ children }) => {
        return (
            <div className="max-w mx-auto overflow-hidden lg:px-12">
                <div className="relative md:flex">{children}</div>
                {/* <Footer /> */}
            </div>
        );
    }
);

PageLayout.displayName = 'PageLayout';
