import React from 'react';
import { PORTFOLIO_DATA, STRENGTHS, STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          About <span className="bg-gradient-to-r from-purple-600 to-yellow-500 text-transparent bg-clip-text">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 text-gray-600 text-lg leading-relaxed space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Hello! I'm Maheshwar Awale</h3>
            <p>{PORTFOLIO_DATA.about}</p>
            <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Career Goals</h4>
                <p>{PORTFOLIO_DATA.careerGoals}</p>
            </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
             <h3 className="text-2xl font-semibold text-gray-800 mb-4">Key Strengths</h3>
            {STRENGTHS.map(strength => (
                <div key={strength.title} className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-yellow-100 text-yellow-600 rounded-full p-3">
                        <strength.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800">{strength.title}</h4>
                        <p className="text-gray-600 text-sm">{strength.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map(stat => (
            <div key={stat.label} className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-yellow-500 text-transparent bg-clip-text">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-500 mt-2">{stat.label}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default About;