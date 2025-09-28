import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { DownloadIcon, EyeIcon } from './icons/UtilityIcons';

const Resume: React.FC = () => {
    return (
        <section id="resume" className="py-20 sm:py-28 bg-[var(--foreground)] scroll-mt-20">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                    My <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">Resume</span>
                </h2>
                <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Download my complete resume to learn more about my background, skills, and experience.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mx-auto mt-4 rounded"></div>
            </div>

            <div className="max-w-4xl mx-auto bg-[var(--card-background)] rounded-lg shadow-xl border border-[var(--card-border)] p-8">
                <div className="text-center">
                    <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">{PORTFOLIO_DATA.name} — {PORTFOLIO_DATA.title}</h3>
                    <p className="mt-2 text-[var(--text-secondary)]">Backend engineer focused on scaling services for hundreds of millions of users, building resilient search systems, and leading cloud migrations (Azure → GCP).</p>
                </div>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[var(--text-secondary)]">
                    <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">Education</h4>
                        <p>B.E. in Information Technology — SKNCOE, Pune University (2018 - 2022)</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">Experience</h4>
                        <p>Software Development Engineer 1 — Reliance Jio (Sept 2022 - Present)</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">Projects</h4>
                        <p>Enhanced MyJio Search, Search API for Jio Financial App, Config automation with Kubernetes</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-[var(--text-primary)] mb-2">Skills</h4>
                        <p>Java, Spring Boot, Elasticsearch, GCP, Microservices, Docker, Kubernetes</p>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a 
                        href="https://drive.google.com/file/d/1iSqfkKcquzr1Tg3w-LgPe3Ud86ytUmnK/view?usp=drive_link" 
                        download="Maheshwar_Awale_Resume.pdf"
                        className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition-opacity"
                    >
                       <DownloadIcon className="w-5 h-5 mr-2" /> Download Resume
                    </a>
                    <a 
                        href="https://drive.google.com/file/d/1iSqfkKcquzr1Tg3w-LgPe3Ud86ytUmnK/view?usp=drive_link"
                        className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)] font-semibold rounded-md shadow-md border border-[var(--btn-secondary-border)] hover:bg-[var(--btn-secondary-hover-bg)] transition-colors"
                    >
                       <EyeIcon className="w-5 h-5 mr-2" /> View Online
                    </a>
                </div>
            </div>

             <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md border border-[var(--card-border)]">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc list-inside">
                        <li>Professional summary and objectives</li>
                        <li>Detailed work experience and achievements</li>
                        <li>Technical skills and proficiencies</li>
                        <li>Education and certifications</li>
                        <li>Notable projects and contributions</li>
                    </ul>
                </div>
                 <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md border border-[var(--card-border)]">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-3">Contact Information</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                        <li><strong>Email:</strong> {PORTFOLIO_DATA.email}</li>
                        <li><strong>Phone:</strong> {PORTFOLIO_DATA.phone}</li>
                        <li><strong>LinkedIn:</strong> linkedin.com/in/maheshwar-a-02b6b6163</li>
                        <li><strong>Location:</strong> {PORTFOLIO_DATA.location}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Resume;