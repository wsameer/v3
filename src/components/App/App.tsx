import Helmet from "components/common/Helmet";
import PageLayout from "components/layout/PageLayout";
import Section from "components/layout/Section";

export const App: React.FC = () => {
  return (
    <div>
      <Helmet />
      <PageLayout>
        <Section />
        <div className="ml-0 md:ml-72 lg:ml-80 flex flex-col"></div>
      </PageLayout>
    </div>
  );
};
