import React, { useState } from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';
// FIX: Import EmailIcon to use for the email contact information.
import { PhoneIcon, LocationIcon, EmailIcon } from './icons/SocialIcons';
import { ArrowUpIcon } from './icons/UtilityIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
          Get In <span className="bg-gradient-to-r from-purple-600 to-yellow-500 text-transparent bg-clip-text">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-yellow-500 mx-auto mt-4 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800">Let's Connect</h3>
            <p className="text-gray-600">
                Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    {/* FIX: Property 'icon' does not exist on type 'string'. Use the imported EmailIcon component. */}
                    <div className="p-3 bg-yellow-100 rounded-full"><EmailIcon className="w-6 h-6 text-yellow-600" /></div>
                    <div>
                        <h4 className="font-semibold text-gray-700">Email</h4>
                        <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-gray-600 hover:text-purple-600">{PORTFOLIO_DATA.email}</a>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-100 rounded-full"><PhoneIcon className="w-6 h-6 text-yellow-600" /></div>
                    <div>
                        <h4 className="font-semibold text-gray-700">Phone</h4>
                        <span className="text-gray-600">{PORTFOLIO_DATA.phone}</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-100 rounded-full"><LocationIcon className="w-6 h-6 text-yellow-600" /></div>
                    <div>
                        <h4 className="font-semibold text-gray-700">Location</h4>
                        <span className="text-gray-600">{PORTFOLIO_DATA.location}</span>
                    </div>
                </div>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                    {SOCIAL_LINKS.map(link => link.name !== 'Email' && (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600">
                           <link.icon className="w-7 h-7" />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-md px-3 py-2 focus:ring-purple-500 focus:border-purple-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-md px-3 py-2 focus:ring-purple-500 focus:border-purple-500"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-md px-3 py-2 focus:ring-purple-500 focus:border-purple-500"/>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full bg-gray-100 border border-gray-300 text-gray-800 rounded-md px-3 py-2 focus:ring-purple-500 focus:border-purple-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-yellow-500 text-white font-semibold py-3 px-4 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Send Message
                </button>
            </form>
        </div>
      </div>

       <footer className="text-gray-600 mt-20 pt-10 border-t border-gray-200">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">{PORTFOLIO_DATA.name}</h3>
                    <p className="text-sm mt-2">{PORTFOLIO_DATA.title} — focused on scalable backend systems, search, and cloud migrations.</p>
                     <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                        {SOCIAL_LINKS.map(link => (
                            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600">
                               <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li><a href="#about" className="hover:text-purple-600">About</a></li>
                        <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
                        <li><a href="#experience" className="hover:text-purple-600">Experience</a></li>
                        <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
                        <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Get In Touch</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li>{PORTFOLIO_DATA.email}</li>
                        <li>{PORTFOLIO_DATA.phone}</li>
                        <li>{PORTFOLIO_DATA.location}</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm relative">
                <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Made with ❤️ & React & Tailwind CSS</p>
                <button onClick={scrollToTop} className="absolute -top-4 right-1/2 translate-x-1/2 md:right-4 md:translate-x-0 bg-white p-2 rounded-full shadow-md border border-gray-300 hover:bg-gray-100">
                    <ArrowUpIcon className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </footer>
    </section>
  );
};

export default Contact;
