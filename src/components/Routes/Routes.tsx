import PageLayout from '@components/layout/PageLayout';
import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RoutePaths from './types';
import Home from '@pages/Home';
import Header from '@components/layout/Header';
import { Footer } from '@components/Footer/Footer';

const Root: React.FC = () => (
	<PageLayout>
		<Header />
		<Outlet />
		<Footer />
	</PageLayout>
);

const router = createBrowserRouter([
	{
		path: RoutePaths.ROOT,
		element: <Root />,
		errorElement: (
			<div>
				<h1>Error page!</h1>
			</div>
		),
		children: [
			{
				path: RoutePaths.HOME,
				element: <Home />
			}
		]
	}
]);

const Routes: React.FC = () => {
	return (
		<RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
	);
};

export default Routes;
