"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true); // Default to true

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      setIsDark(true); // default
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
