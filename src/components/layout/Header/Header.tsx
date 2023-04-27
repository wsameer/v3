import React, { useCallback } from 'react';
import NavLink, { NavLinkProps } from './NavLink';

const NavItems: Array<NavLinkProps> = [
	{
		title: 'About',
		link: '/v3/about',
		isActive: false
	},
	{
		title: 'Projects',
		link: '/v3/projects',
		isActive: false
	},
	{
		title: 'Experience',
		link: '/v3/experience',
		isActive: false
	},
	{
		title: 'Contact',
		link: '/v3/contact',
		isActive: false
	}
];

export const Header: React.FC = () => {
	const generateLink = useCallback(() => {
		return NavItems.map((navItem: NavLinkProps, index: number) => (
			<NavLink
				title={navItem.title}
				link={navItem.link}
				isActive={navItem.isActive}
				key={navItem.title}
			/>
		));
	}, [NavItems]);

	return (
		<header>
			<div className="mx-auto">
				<div className="relative flex gap-4">
					<div className="flex flex-1"></div>
					<div className="flex flex-1 justify-end md:justify-center">
						<div className="pointer-events-auto hidden md:block">
							<ul className="hidden lg:flex rounded-full bg-white/90 px-2.5 py-2.5 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200">
								{generateLink()}
							</ul>
						</div>
					</div>
					<div className="flex justify-end md:flex-1">
						<div className="pointer-events-auto">
							<button type="button">Theme</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
