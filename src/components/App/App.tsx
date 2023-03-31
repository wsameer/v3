import Head from 'components/common/Head';
import PageLayout from 'components/layout/PageLayout';
import SideBox from 'components/SideBox';

export const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-700 md:p-6">
            <Head />
            <PageLayout>
                <SideBox />
            </PageLayout>
        </div>
    );
};
