import React from 'react';
import PropTypes from 'prop-types';
// TODO: use NavLink instead
import { Link } from 'react-router-dom';

export type NavLinkProps = {
	title: string;
	link: string;
	isActive: boolean;
};

const NavLink: React.FC<NavLinkProps> = React.memo(
	({ title, link, isActive }) => {
		console.log(title, link);
		return (
			<li>
				<Link
					to={link}
					className={`relative block mx-1.5 px-4 py-1.5 text-base rounded-full transition ${isActive && 'bg-gray-700'
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
