'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { language, setLanguage, content } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-base sm:text-lg font-display font-semibold text-ink hover:text-accent transition-colors z-50"
          >
            wayne<span className="text-accent">.dev</span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm text-ink-lighter hover:text-ink transition-colors"
            >
              {content.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-sm text-ink-lighter hover:text-ink transition-colors"
            >
              {content.nav.work}
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-sm text-ink-lighter hover:text-ink transition-colors"
            >
              {content.nav.process}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-ink-lighter hover:text-ink transition-colors"
            >
              {content.nav.contact}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-2 lg:ml-4 border-l border-ink/10 pl-2 lg:pl-4">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-medium transition-colors ${
                  language === 'en' ? 'text-ink' : 'text-ink-lighter hover:text-ink'
                }`}
              >
                EN
              </button>
              <span className="text-ink/20">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`text-xs font-medium transition-colors ${
                  language === 'de' ? 'text-ink' : 'text-ink-lighter hover:text-ink'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-medium transition-colors ${
                  language === 'en' ? 'text-ink' : 'text-ink-lighter'
                }`}
              >
                EN
              </button>
              <span className="text-ink/20 text-xs">|</span>
              <button
                onClick={() => setLanguage('de')}
                className={`text-xs font-medium transition-colors ${
                  language === 'de' ? 'text-ink' : 'text-ink-lighter'
                }`}
              >
                DE
              </button>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink hover:text-accent transition-colors z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-paper/95 backdrop-blur-md border-b border-ink/5 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-ink-lighter hover:text-accent transition-colors"
              >
                {content.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="text-left py-2 text-ink-lighter hover:text-accent transition-colors"
              >
                {content.nav.work}
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left py-2 text-ink-lighter hover:text-accent transition-colors"
              >
                {content.nav.process}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-ink-lighter hover:text-accent transition-colors"
              >
                {content.nav.contact}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
