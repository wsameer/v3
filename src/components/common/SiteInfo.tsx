import React from 'react';

const SiteInfo: React.FC = () => {
	return (
		<div>
			<h2>About this site</h2>
			<h3>In case if you were wondering this site is:</h3>
			<ul>
				<li>
					Designed and built on Mac using Figma and Visual Studio Code
				</li>
				<li>Hosted by GitHub with deployment via GitHub Actions</li>
				<li>Written in TypeScript and React</li>
				<li>Styled with Tailwind CSS</li>
				<li>Built using Vite</li>
			</ul>
		</div>
	);
};

export default SiteInfo;
