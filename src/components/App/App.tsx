import { Footer } from 'components/Footer/Footer';
import Router from 'components/Router';
import SideBox from 'components/SideBox';
import Head from 'components/common/Head';
import PageLayout from 'components/layout/PageLayout';

export const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-700 md:p-6">
			<Head />
			<PageLayout>
				<SideBox />
				<Router />
			</PageLayout>
			<Footer />
		</div>
	);
};
