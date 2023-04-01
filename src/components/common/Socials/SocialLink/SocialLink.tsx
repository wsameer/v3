import React, { ReactElement } from 'react';

type Props = {
    url: string;
    logo: ReactElement<any>;
    label: string;
};

export const SocialLink: React.FC<Props> = ({ url, logo, label }) => {
    return (
        <a
            className="mt-2 mx-4 text-gray-300"
            rel="noreferrer"
            href={url}
            target="_blank"
            aria-label={label}
        >
            <span>{logo}</span>
        </a>
    );
};
SocialLink.displayName = 'SocialLink';
