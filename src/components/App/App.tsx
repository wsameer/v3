import Head from "components/common/Head";
import PageLayout from "components/layout/PageLayout";
import Section from "components/layout/Section";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-700 md:p-6">
      <Head />
      <PageLayout>
        <Section />
        <div className="ml-0 md:ml-72 lg:ml-80 flex flex-col"></div>
      </PageLayout>
    </div>
  );
};
