import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../components/Themes/ThemeContext';
import Logo from '../../assets/Logo/title.png';
import { dataCard } from '../../Data/Data';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { Button } from '@chakra-ui/react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation(); // Untuk melacak perubahan rute

  // Menutup dropdown dan menu mobile saat navigasi ke lokasi baru
  React.useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]); // Memantau perubahan lokasi

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`relative ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex items-center justify-between py-5 font-medium">
        <img src={Logo} alt="Logo" className="w-20" />
        <div className="flex-grow">
          <ul className="flex justify-center gap-5 text-sm">
            <NavLink to="/" className='flex flex-col items-center gap-1'>
              <p>Home</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            {/* Desktop Services Dropdown */}
            <li className="relative flex flex-col items-center gap-1">
              <button onClick={toggleDropdown} className="flex flex-col items-center gap-1">
                <p>Services</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
              </button>
              {dropdownOpen && (
                <ul className={`absolute top-full mt-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} shadow-lg rounded-lg w-48 z-50`}>
                  {dataCard.map((card) => (
                    <li key={card.id}>
                      <NavLink 
                        to={`/services/${card.id}`} 
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {card.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <NavLink to="/album" className='flex flex-col items-center gap-1'>
              <p>Album</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to="/about" className='flex flex-col items-center gap-1'>
              <p>About</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
              <p>Contact</p>
              <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-gray-700">
            {darkMode ? (
              <MdLightMode className="w-6 h-6" />
            ) : (
              <MdDarkMode className="w-6 h-6" />
            )}
          </button>
          <Link to="/order">
            <Button
              className="order-button"
              colorScheme={darkMode ? 'blue' : 'teal'}
              variant="solid"
              size="md"
              borderRadius="md"
              _hover={{ 
                transform: 'scale(1.05)', 
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'all 0.3s ease'
                }
              }}
              _focus={{ boxShadow: 'outline' }}
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'currentColor',
                transition: 'all 0.3s ease',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right'
              }}
            >
              Order Now!
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`sm:hidden flex items-center justify-between py-5 font-medium ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
        <img src={Logo} alt="Logo" className="w-20" />

        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode} className="text-gray-700">
            {darkMode ? (
              <MdLightMode className="w-6 h-6" />
            ) : (
              <MdDarkMode className="w-6 h-6" />
            )}
          </button>
          <Link to="/order">
            <Button
              className="order-button"
              colorScheme={darkMode ? 'blue' : 'teal'}
              variant="solid"
              size="md"
              borderRadius="md"
              _hover={{ 
                transform: 'scale(1.05)', 
                position: 'relative',
                _after: {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'currentColor',
                  transition: 'all 0.3s ease'
                }
              }}
              _focus={{ boxShadow: 'outline' }}
              position="relative"
              _after={{
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                backgroundColor: 'currentColor',
                transition: 'all 0.3s ease',
                transform: 'scaleX(0)',
                transformOrigin: 'bottom right'
              }}
            >
              Order Now!  
            </Button>
          </Link>

          <button onClick={toggleMobileMenu} className="text-gray-700">
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`sm:hidden absolute top-full left-0 w-full ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'} p-5 z-50`}>
          <ul className="flex flex-col gap-4">
            <NavLink to="/" onClick={toggleMobileMenu}>
              <p>Home</p>
            </NavLink>
            <li className="relative">
              <button onClick={toggleDropdown}>
                <p>Services</p>
              </button>
              {dropdownOpen && (
                <ul className={`flex flex-col gap-2 mt-2 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700'} shadow-lg rounded-lg`}>
                  {dataCard.map((card) => (
                    <li key={card.id}>
                      <NavLink 
                        to={`/services/${card.id}`} 
                        onClick={toggleMobileMenu}
                        className="block px-4 py-2 hover:bg-gray-200"
                      >
                        {card.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <NavLink to="/album" onClick={toggleMobileMenu}>
              <p>Album</p>
            </NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu}>
              <p>About</p>
            </NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu}>
              <p>Contact</p>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
