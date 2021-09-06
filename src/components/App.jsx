import './css/global.css';
import ControlSection from './layout/ControlSection';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainSection from './layout/MainSection';
import SearchSection from './layout/SearchSection';

const App = () => (
    <>
        <Header />
        <SearchSection />
        <ControlSection />
        <MainSection />
        <Footer />
    </>
);

export default App;
