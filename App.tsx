import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import BackToTopButton from './components/BackToTopButton';
import { Theme } from './types';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, rawSetTheme] = useState<Theme>('system');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      rawSetTheme(storedTheme);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    rawSetTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentTheme = theme === 'system' ? (isDark ? 'dark' : 'light') : theme;
    
    root.setAttribute('data-theme', currentTheme);

    if (theme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            root.setAttribute('data-theme', mediaQuery.matches ? 'dark' : 'light');
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);


  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'resume', 'contact'];
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      
      let currentSection = 'hero';
      for(const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 100; // 100px offset for header
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      if (scrollY + innerHeight >= document.body.offsetHeight - 100) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[var(--background)] text-[var(--text-primary)] min-h-screen transition-colors duration-300">
      <Header activeSection={activeSection} theme={theme} setTheme={setTheme} />
      <main>
          <Hero />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
          </div>
      </main>
      <Chatbot />
      <BackToTopButton show={showBackToTop} />
    </div>
  );
};

export default App;