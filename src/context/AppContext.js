import React, { createContext, useState, useContext } from 'react';

// ... existing imports
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Rohit Dhyani',
    email: 'rohit@example.com',
    isLoggedIn: true,
  });

  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light'); // light | dark

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  const logout = () => {
    setUser({ name: '', email: '', isLoggedIn: false });
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{ user, cart, theme, toggleTheme, addToCart, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
