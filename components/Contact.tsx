import React, { useState } from 'react';
import { PORTFOLIO_DATA, SOCIAL_LINKS } from '../constants';
import { PhoneIcon, LocationIcon, EmailIcon } from './icons/SocialIcons';
import { ArrowUpIcon } from './icons/UtilityIcons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  // simple honeypot field (bots often fill hidden fields)
  const [company, setCompany] = useState(''); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Google Form submit ---
  // NOTE: update formUrl to your form's /formResponse endpoint
  const submitToGoogleForm = async () => {
    const formUrl =
      'https://docs.google.com/forms/d/e/1FAIpQLSeRfsme-JSeZAVa-mpZ20X5hLwV8mY7bdeFRDPgimWELbRR1Q/formResponse';

    const payload = new FormData();
    // NOTE: update these entry.* IDs if your form questions changed
    payload.append('entry.548444918', formData.name);
    payload.append('entry.454716312', formData.email);
    payload.append('entry.1266680494', formData.subject);
    payload.append('entry.978256163', formData.message);

    try {
      // Google Forms doesn't send CORS headers → must use no-cors (opaque response)
      await fetch(formUrl, { method: 'POST', mode: 'no-cors', body: payload });
      return true; // If network layer didn't throw, we assume success
    } catch (err) {
      console.error('Google Form submission error:', err);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // honeypot: if filled, treat as spam (don't submit)
    if (company && company.trim().length > 0) {
      setStatusType('success');
      setStatusMessage('✅ Thanks!'); // pretend success, silently drop
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const ok = await submitToGoogleForm();

    if (ok) {
      setStatusType('success');
      setStatusMessage('✅ Thanks for reaching out! I’ll be in touch shortly. 🚀');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatusType('error');
      setStatusMessage('❌ Failed to submit. Please try again.');
    }

    setIsSubmitting(false);
    // Auto-clear status after a bit
    setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
          Get In <span className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-transparent bg-clip-text">Touch</span>
        </h2>
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] mx-auto mt-4 rounded"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Let's Connect</h3>
          <p className="text-[var(--text-secondary)]">
            Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of the channels below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[var(--highlight-background)] rounded-full"><EmailIcon className="w-6 h-6 text-[var(--highlight-text)]" /></div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)]">Email</h4>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-[var(--text-secondary)] hover:text-[var(--accent)]">{PORTFOLIO_DATA.email}</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[var(--highlight-background)] rounded-full"><PhoneIcon className="w-6 h-6 text-[var(--highlight-text)]" /></div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)]">Phone</h4>
                <span className="text-[var(--text-secondary)]">{PORTFOLIO_DATA.phone}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[var(--highlight-background)] rounded-full"><LocationIcon className="w-6 h-6 text-[var(--highlight-text)]" /></div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)]">Location</h4>
                <span className="text-[var(--text-secondary)]">{PORTFOLIO_DATA.location}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(link => link.name !== 'Email' && (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">
                  <link.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[var(--card-background)] p-8 rounded-lg shadow-lg border border-[var(--card-border)]">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* honeypot (hidden from users) */}
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-1">Name *</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-[var(--input-background)] border border-[var(--chip-border)] text-[var(--text-primary)] rounded-md px-3 py-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-1">Email *</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-[var(--input-background)] border border-[var(--chip-border)] text-[var(--text-primary)] rounded-md px-3 py-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[var(--text-primary)] mb-1">Subject *</label>
              <input
                type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                className="w-full bg-[var(--input-background)] border border-[var(--chip-border)] text-[var(--text-primary)] rounded-md px-3 py-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-1">Message *</label>
              <textarea
                id="message" name="message" value={formData.message} onChange={handleChange} rows={4} required
                className="w-full bg-[var(--input-background)] border border-[var(--chip-border)] text-[var(--text-primary)] rounded-md px-3 py-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            {statusMessage && (
              <div
                className={`text-sm ${statusType === 'success' ? 'text-green-600' : 'text-red-600'}`}
                role="status"
              >
                {statusMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] text-white font-semibold py-3 px-4 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer className="text-[var(--text-secondary)] mt-20 pt-10 border-t border-[var(--card-border)]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-[var(--text-primary)]">{PORTFOLIO_DATA.name}</h3>
            <p className="text-sm mt-2">{PORTFOLIO_DATA.title} — focused on scalable backend systems, search, and cloud migrations.</p>
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#about" className="hover:text-[var(--accent)]">About</a></li>
              <li><a href="#skills" className="hover:text-[var(--accent)]">Skills</a></li>
              <li><a href="#experience" className="hover:text-[var(--accent)]">Experience</a></li>
              <li><a href="#projects" className="hover:text-[var(--accent)]">Projects</a></li>
              <li><a href="#contact" className="hover:text-[var(--accent)]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Get In Touch</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>{PORTFOLIO_DATA.email}</li>
              <li>{PORTFOLIO_DATA.phone}</li>
              <li>{PORTFOLIO_DATA.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[var(--card-border)] text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Made with ❤️ & React & Tailwind CSS</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
