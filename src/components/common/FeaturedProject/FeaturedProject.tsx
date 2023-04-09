import React, { useCallback } from 'react';
import type { Position, FeaturedProjectProps } from './types';

export const FeaturedProject: React.FC<FeaturedProjectProps> = React.memo(
	({ leftContent, rightContent, type }) => {
		const getZIndexValue = useCallback(
			(position: Position) => {
				if (type === 1) {
					return position === 'left' ? 'z-20' : 'z-10';
				}
				return position === 'right' ? 'z-20' : 'z-10';
			},
			[type]
		);
		return (
			<div className="mb-8 md:mb-16 grid grid-cols-12 items-center">
				<div
					className={`text-left row-start-1 row-end-n1 col-start-1 col-end-n1 lg:col-start-1 lg:col-end-7 ${getZIndexValue(
						'left'
					)}`}>
					{leftContent}
				</div>
				<div
					className={`text-left lg:text-right row-start-1 row-end-n1 col-start-1 col-end-n1 lg:col-start-6 lg:col-end-n1 ${getZIndexValue(
						'right'
					)}`}>
					{rightContent}
				</div>
			</div>
		);
	}
);

FeaturedProject.displayName = 'FeaturedProject';
