import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Work <span className="bg-gradient-to-r from-purple-600 to-yellow-500 text-transparent bg-clip-text">Experience</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          My professional journey in software development, showcasing growth and key achievements.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mt-4 rounded"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-purple-300 pl-10 space-y-12">
            {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative">
                    <div className="absolute -left-[49px] top-1 w-4 h-4 bg-white rounded-full border-4 border-purple-500"></div>
                    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
                      <div className="flex justify-between items-start mb-2 flex-wrap">
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <span className="text-sm font-medium text-purple-700 bg-purple-100 px-3 py-1 rounded-full">{exp.duration}</span>
                      </div>
                      <p className="text-lg font-semibold text-gray-600 mb-4">{exp.company} - <span className="text-sm">{exp.location}</span></p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2 text-sm">
                            {exp.achievements.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                        </ul>
                      </div>

                       <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                             {exp.technologies.map((tech, i) => (
                                <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                      </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;