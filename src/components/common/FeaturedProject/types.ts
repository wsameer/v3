import type { ReactElement } from 'react';

export type Position = 'left' | 'right';
export type FeaturedProjectProps = {
	leftContent: ReactElement;
	rightContent: ReactElement;
	type: 1 | 2;
};
