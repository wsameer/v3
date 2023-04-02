import React, { PropsWithChildren } from 'react';

export const SectionTitle: React.FC<PropsWithChildren> = React.memo(
	({ children }) => {
		return (
			<h2 className="text-2xl md:text-3xl text-white font-bold uppercase mb-6">
				{children}
			</h2>
		);
	}
);

SectionTitle.displayName = 'SectionTitle';
