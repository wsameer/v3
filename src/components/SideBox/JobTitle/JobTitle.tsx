import React from 'react';

export const JobTitle: React.FC<{ value: string }> = React.memo(({ value }) => {
    return <h3 className="font-medium text-gray-400 text-lg m-3">{value}</h3>;
});

JobTitle.displayName = 'JobTitle';
