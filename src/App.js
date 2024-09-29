import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import { routes } from './constants/routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/About Us/AboutUs';
import Contact from './pages/Contact/Contact';
import Bonus from './pages/Bonus/Bonus';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.aboutUs} element={<AboutUs />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.bonus} element={<Bonus />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
