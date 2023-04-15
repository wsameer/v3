import Routes from "@components/Routes/Routes";
import Nav from "./layout/Nav";
import Footer from "./Footer/";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-700 md:p-6">
    <Nav />
    <Routes />
    <Footer />
  </div>
);

export default App;
