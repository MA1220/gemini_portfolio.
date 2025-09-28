import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, rawSetTheme] = useState<Theme>(() => {
    // We can't check localStorage or URL on server, so default to system
    if (typeof window === 'undefined') {
        return 'system';
    }
    
    // Check for URL override first
    const urlParams = new URLSearchParams(window.location.search);
    const urlTheme = urlParams.get('theme') as Theme | null;
    if (urlTheme) {
        localStorage.setItem('theme', urlTheme);
        return urlTheme;
    }
    
    // Then check localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme || 'system';
  });

  const setTheme = (newTheme: Theme) => {
    rawSetTheme(newTheme);
    // Persist to localStorage
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
    } else {
      localStorage.setItem('theme', newTheme);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (t: Theme) => {
      if (t === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        root.setAttribute('data-theme', systemTheme);
      } else {
        root.setAttribute('data-theme', t);
      }
    };

    const handleSystemChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };
    
    applyTheme(theme);

    mediaQuery.addEventListener('change', handleSystemChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};