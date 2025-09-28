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

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 600;

      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      
      if (window.scrollY > heroHeight) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-gray-800 min-h-screen">
      <Header isVisible={isHeaderVisible} />
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