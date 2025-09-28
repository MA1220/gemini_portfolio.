import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Featured <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">Projects</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          Projects from my recent work — search, scalable backend systems, and cloud migrations.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mx-auto mt-4 rounded"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {PROJECTS.map((project, index) => (
          <div key={index} className="bg-[var(--card-background)] rounded-lg overflow-hidden shadow-lg border border-[var(--card-border)] group transform transition-transform duration-300 hover:scale-105">
            <div className="relative h-64 overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">{project.title}</h3>
              <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-[var(--chip-background)] text-[var(--text-primary)] text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--chip-border)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;