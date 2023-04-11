import Footer from '@components/Footer';
import Routes from '@components/Routes/Routes';
import Head from '@components/common/Head';

export const App: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-700 md:p-6">
			<Head />
			<Routes />
			<Footer />
		</div>
	);
};
