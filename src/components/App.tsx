import Routes from "@components/Routes/Routes";
import { Footer } from "./Footer/Footer";
import { Header } from "./layout/Header/Header";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-700 md:p-6">
    <Header />
    <Routes />
    <Footer />
  </div>
);

export default App;
