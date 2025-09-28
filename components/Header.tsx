import React from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';

interface HeaderProps {
    isVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({ isVisible }) => {
  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Resume', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-40 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-yellow-500 flex items-center justify-center text-white font-bold text-lg">
                MA
            </div>
            <span className="font-semibold text-xl tracking-tight text-gray-800">{PORTFOLIO_DATA.name}</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                      {link}
                  </a>
              ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <link.icon className="w-5 h-5" />
                </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;