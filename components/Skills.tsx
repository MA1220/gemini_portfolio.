import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-[var(--foreground)] scroll-mt-20 transition-colors duration-300">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Technical <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">Skills</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to build robust applications.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mx-auto mt-4 rounded"></div>
      </div>
      <div className="max-w-6xl mx-auto space-y-12">
        {SKILLS.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-center mb-6 text-[var(--text-primary)]">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 bg-[var(--card-background)] text-[var(--text-primary)] px-4 py-2 rounded-lg shadow-md border border-[var(--card-border)] hover:shadow-lg hover:border-[var(--accent)] transition-all duration-300 w-48">
                  <skill.icon className="w-7 h-7 text-[var(--accent)]" />
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;