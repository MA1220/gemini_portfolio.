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
import { ThemeProvider } from './contexts/ThemeContext';

const AppContent: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  
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
    <div className="bg-[var(--background)] text-[var(--text-primary)] min-h-screen">
      <Header activeSection={activeSection} />
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
      <Chatbot isOpen={isChatbotOpen} setIsOpen={setIsChatbotOpen} />
      <BackToTopButton show={showBackToTop && !isChatbotOpen} />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;