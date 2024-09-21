import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './components/Themes/ThemeContext';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import ServiceDetail from './components/Pages/servicesDetail';
import Album from './components/Pages/Album';
import OrderForm from './components/Pages/OrderForm';
import Contact from './components/Pages/Contact';
import Footer from './components/Hero/Footer';
import Navbar from './components/Pages/Navbar';
import NotFoundPage from './components/Pages/NotFoundPage';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import SocialSidebar from './components/Pages/SocialSideBar';
import AdminPanel from './AdminPanel';

const AppContent = () => {
  const location = useLocation();
  const { darkMode } = useTheme();
  const hideFooterRoutes = ['/order'];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []); // Initialize AOS only once when the component mounts

  return (
    <div
      className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:id' element={<ServiceDetail />} />
        <Route path="/album/" element={<Album />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order' element={<OrderForm />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='admin-dashboard' element={<AdminPanel/>} />
      </Routes>
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
      <SocialSidebar />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
