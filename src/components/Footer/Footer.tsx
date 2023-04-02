import React, { useEffect, useState } from 'react';
import { Code, Heart } from 'react-feather';
import buildWithNext from '/src/img/build-with-nextjs.png';

export const Footer: React.FC = () => {
	const [currentYear, setCurrentYear] = useState(null);
	useEffect(() => {
		const year = new Date().getFullYear();
		setCurrentYear(year);
	}, []);

	return (
		<footer className="flex flex-row justify-between w-full">
			<div>
				<p className="flex flex-row">
					<Code className="text-gray-300" size={20} />
					<small className="text-gray-300">&nbsp;with&nbsp;</small>
					<Heart className="text-red-600" size={18} />
					<small className="text-gray-300">
						&nbsp;by Sameer Waskar © {currentYear}.
					</small>
				</p>
			</div>
			<div>
				<a
					href="https://nextjs.org/"
					rel="noreferrer"
					target="_blank"
					className="w-24"
				>
					<img
						width="100"
						height="18"
						alt="project build with Next.js"
						src={buildWithNext}
					/>
				</a>
			</div>
		</footer>
	);
};

Footer.displayName = 'Footer';
