'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Process() {
  const { content } = useLanguage();

  return (
    <section id="process" className="section-padding px-6 bg-paper-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            {content.process.heading}
          </h2>
          <p className="text-xl text-ink-lighter">
            {content.process.subheading}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {content.process.steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="text-7xl font-display font-semibold text-accent/10 mb-4">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-2xl font-display font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-ink-lighter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-20 pt-16 border-t border-ink/10">
          <h3 className="text-2xl font-display font-semibold text-ink mb-8">
            {content.tech.heading}
          </h3>
          <div className="flex flex-wrap gap-4">
            {content.tech.items.map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-paper text-ink-lighter rounded-full border border-ink/5 hover:border-accent/30 hover:text-accent transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
