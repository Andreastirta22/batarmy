import { createContext, useState, useContext } from 'react';

// Buat context
const ThemeContext = createContext();

// Buat provider
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Default mode terang

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook untuk menggunakan context
export const useTheme = () => useContext(ThemeContext);
