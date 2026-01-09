'use client';

import { useState } from 'react';
import { useIntlayer } from 'next-intlayer';

export default function Contact() {
  const { heading, description, email, calendarText, calendarLink, copyButton, copiedButton } = useIntlayer('contact');
  const { availability, location } = useIntlayer('footer');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-semibold text-ink mb-4 sm:mb-6">
          {heading}
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-ink-lighter mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          {description}
        </p>

        {/* Email with Copy Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a
            href={`mailto:${email}`}
            className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-accent hover:text-accent-dark transition-colors break-all px-2"
          >
            {email}
          </a>

          <button
            onClick={copyEmail}
            className="px-4 sm:px-6 py-2 border-2 border-accent text-accent rounded-full font-medium hover:bg-accent hover:text-white transition-all hover-lift text-sm sm:text-base"
          >
            {copied ? copiedButton : copyButton}
          </button>
        </div>

        {/* Calendar Link */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-ink-lighter px-2">
          <span>{calendarText}</span>
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent font-medium hover:gap-2 transition-all"
          >
            →
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-ink/10">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3 sm:gap-4 text-xs sm:text-sm text-ink-lighter">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {availability}
              </div>
              <div>{location}</div>
            </div>

            {/* Brand */}
            <div className="text-xl sm:text-2xl font-display font-semibold text-ink">
              wayne<span className="text-accent">.dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
