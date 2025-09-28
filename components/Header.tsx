import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';
import { MenuIcon, CloseIcon as UtilityCloseIcon, ThemeIcon, DownloadIcon } from './icons/UtilityIcons';
import { THEME_CATEGORIES } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  
  const navLinks = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = (link === 'Home' ? 'hero' : link.toLowerCase());
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const getHref = (link: string) => {
    if (link === 'Home') return '#hero';
    return `#${link.toLowerCase()}`;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const ThemeSwitcherDropdown: React.FC = () => (
    <div className="absolute right-0 mt-2 w-56 bg-[var(--foreground)] rounded-md shadow-lg py-1 border border-[var(--card-border)] max-h-96 overflow-y-auto z-50">
      {THEME_CATEGORIES.map(category => (
        <div key={category.name} className="px-1 py-1">
          <h4 className="px-2 py-1 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">{category.name}</h4>
          {category.themes.map(t => (
            <button
              key={t.name}
              onClick={() => { setTheme(t.name); setIsThemeOpen(false); }}
              className={`w-full text-left px-2 py-1.5 text-sm rounded-md ${theme === t.name ? 'font-semibold text-[var(--accent)] bg-[var(--highlight-background)]' : 'text-[var(--text-secondary)]'} hover:bg-[var(--background)]`}
            >
              {t.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--foreground)]/80 backdrop-blur-sm z-40 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => handleNavClick(e, 'Home')} className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                MA
            </div>
             <div className="font-semibold text-xl tracking-tight text-[var(--text-primary)] leading-5">
                <span className="sm:hidden">M. Awale</span>
                <span className="hidden sm:block">Maheshwar<br/>Awale</span>
            </div>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map(link => (
                  <a 
                    key={link} 
                    href={getHref(link)} 
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative text-[var(--text-secondary)] hover:text-[var(--text-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === (link === 'Home' ? 'hero' : link.toLowerCase()) ? 'text-[var(--accent)] font-semibold' : ''}`}
                  >
                      {link}
                      {activeSection === (link === 'Home' ? 'hero' : link.toLowerCase()) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-[var(--accent)] rounded-full"></span>
                      )}
                  </a>
              ))}
          </nav>

          <div className="flex items-center space-x-2">
            <a 
                href="https://drive.google.com/file/d/1iSqfkKcquzr1Tg3w-LgPe3Ud86ytUmnK/view?usp=drive_link" 
                download="Maheshwar_Awale_Resume.pdf"
                className="hidden sm:flex items-center px-4 py-2 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white text-sm font-semibold rounded-md shadow-sm hover:opacity-90 transition-opacity"
            >
                <DownloadIcon className="w-4 h-4 mr-2"/>
                Resume
            </a>
            <div className="relative" ref={themeMenuRef}>
                 <button onClick={() => setIsThemeOpen(!isThemeOpen)} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] focus:ring-offset-[var(--background)]">
                    <ThemeIcon className="w-6 h-6" />
                 </button>
                 {isThemeOpen && <ThemeSwitcherDropdown />}
            </div>
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-[var(--text-primary)] hover:text-[var(--accent)] focus:outline-none ml-2">
              {isMenuOpen ? <UtilityCloseIcon className="w-6 h-6"/> : <MenuIcon className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>
      
      <div className={`absolute top-full left-0 right-0 bg-[var(--foreground)] shadow-lg lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 border-t border-[var(--card-border)]' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center space-y-2 p-4">
            {navLinks.map(link => (
                <a 
                    key={link} 
                    href={getHref(link)} 
                    onClick={(e) => handleNavClick(e, link)}
                    className={`w-full text-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--background)] px-3 py-3 rounded-md text-base font-medium transition-colors ${activeSection === (link === 'Home' ? 'hero' : link.toLowerCase()) ? 'text-[var(--accent)] font-semibold bg-[var(--highlight-background)]' : ''}`}
                >
                    {link}
                </a>
            ))}
             <a 
                href="/Maheshwar_Awale_Resume.pdf" 
                download="Maheshwar_Awale_Resume.pdf"
                className="w-full flex sm:hidden items-center justify-center mt-2 px-4 py-3 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white text-sm font-semibold rounded-md shadow-sm hover:opacity-90 transition-opacity"
            >
                <DownloadIcon className="w-4 h-4 mr-2"/>
                Download Resume
            </a>
            <div className="flex space-x-6 pt-4">
                 {SOCIAL_LINKS.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;