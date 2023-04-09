import React from 'react';
import type { ProjectDescProps } from './types';

export const ProjectDetails: React.FC<ProjectDescProps> = ({
	title,
	description,
	techList,
	links
}) => {
	return (
		<div className="p-6 lg:p-2 shadow-8xl lg:shadow-none">
			<span className="mb-1 text-base text-purple-400">
				Featured project
			</span>
			<h3 className="text-xl md:text-2xl text-white font-bold">
				{title}
			</h3>
			<div className="my-4 p-0 lg:p-4 lg:shadow-8xl bg-transparent lg:bg-gray-900 rounded">
				<p className="text-sm text-white">{description}</p>
			</div>
			<div className="flex flex-wrap mb-2">
				{techList?.map((tech, index) => (
					<span
						key={index}
						className="p-2 m-1 rounded bg-purple-600 hover:bg-purple-700 text-white text-xs"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
};

ProjectDetails.displayName = 'ProjectDetails';
