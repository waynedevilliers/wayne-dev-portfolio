'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { content } = useLanguage();
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated elements will use staggered delays */}
        <div
          className="inline-block mb-6 text-sm font-medium text-ink-lighter uppercase tracking-wider"
          style={{ animationDelay: '0.1s' }}
        >
          {content.hero.title}
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-8xl font-display font-bold text-ink mb-4 leading-tight"
          style={{ animationDelay: '0.2s' }}
        >
          wayne<span className="text-accent">.dev</span>
        </h1>

        <div
          className="text-lg text-ink-lighter mb-8"
          style={{ animationDelay: '0.25s' }}
        >
          by Wayne de Villiers
        </div>
        
        <p 
          className="text-xl md:text-2xl text-ink-lighter leading-relaxed mb-12 max-w-3xl mx-auto"
          style={{ animationDelay: '0.3s' }}
        >
          {content.hero.description}
        </p>
        
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-medium hover:bg-accent-dark transition-all hover-lift"
          style={{ animationDelay: '0.4s' }}
        >
          {content.hero.cta}
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-ink/20 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-ink/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
