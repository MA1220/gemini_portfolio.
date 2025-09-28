import React from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative text-center py-24 sm:py-32 lg:py-40 bg-[var(--foreground)] overflow-hidden">
        <div className="absolute inset-0 bg-grid-[var(--card-border)]/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div 
                className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] p-1.5 shadow-lg"
            >
                <div className="w-full h-full rounded-full bg-[var(--foreground)] flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">
                        MA
                    </span>
                </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Maheshwar <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">Awale</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-[var(--text-secondary)] font-semibold">{PORTFOLIO_DATA.title}</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
                {PORTFOLIO_DATA.location} &nbsp;&bull;&nbsp; {PORTFOLIO_DATA.phone}
            </p>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)]">
                {PORTFOLIO_DATA.heroSubtitle}
            </p>

            <div className="mt-8 flex justify-center items-center gap-4">
                <a 
                    href="/Maheshwar_Awale_Resume.pdf" 
                    download="Maheshwar_Awale_Resume.pdf"
                    className="px-6 py-3 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition-opacity"
                >
                    Download Resume
                </a>
                <a 
                    href="#contact" 
                    className="px-6 py-3 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] font-semibold rounded-md shadow-md border border-[var(--btn-secondary-border)] hover:bg-[var(--btn-secondary-hover-bg)] transition-colors"
                >
                    Get In Touch
                </a>
            </div>

            <div className="mt-8 flex justify-center space-x-6">
                {SOCIAL_LINKS.map((link) => (
                    <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300"
                    >
                        <link.icon className="w-6 h-6" />
                    </a>
                ))}
            </div>
      </div>
    </section>
  );
};

export default Hero;