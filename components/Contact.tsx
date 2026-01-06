'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { content } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(content.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-display font-semibold text-ink mb-6">
          {content.contact.heading}
        </h2>
        
        <p className="text-xl text-ink-lighter mb-12 max-w-2xl mx-auto">
          {content.contact.description}
        </p>

        {/* Email with Copy Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${content.contact.email}`}
            className="text-2xl md:text-3xl font-display font-semibold text-accent hover:text-accent-dark transition-colors"
          >
            {content.contact.email}
          </a>
          
          <button
            onClick={copyEmail}
            className="px-6 py-2 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-all hover-lift"
          >
            {copied ? content.contact.copiedButton : content.contact.copyButton}
          </button>
        </div>

        {/* Calendar Link */}
        <div className="flex items-center justify-center gap-2 text-ink-lighter">
          <span>{content.contact.calendarText}</span>
          <a
            href={content.contact.calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
          >
            →
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-16 border-t border-ink/10">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 text-sm text-ink-lighter">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {content.footer.availability}
              </div>
              <div>{content.footer.location}</div>
            </div>

            {/* Brand */}
            <div className="text-2xl font-display font-semibold text-ink">
              wayne<span className="text-accent">.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
