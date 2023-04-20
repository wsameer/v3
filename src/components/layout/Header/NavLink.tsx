import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export type NavLinkProps = {
	title: string;
	link: string;
	isActive: boolean;
};

const NavLink: React.FC<NavLinkProps> = React.memo(
	({ title, link, isActive }) => {
		return (
			<li>
				<Link
					to={link}
					className={`relative block mx-1.5 px-4 py-1.5 text-base rounded-full transition hover:text-purple-500 dark:hover:text-purple-400 ${
						isActive && 'bg-gray-700'
					}`}>
					{title}
				</Link>
			</li>
		);
	}
);

NavLink.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired
};

NavLink.defaultProps = {
	title: '',
	link: '/404',
	isActive: false
};

export default NavLink;
