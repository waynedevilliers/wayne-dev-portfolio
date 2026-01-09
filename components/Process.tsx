'use client';

import { useIntlayer } from 'next-intlayer';

export default function Process() {
  const { heading, subheading, steps } = useIntlayer('process');
  const { heading: techHeading, items: techItems } = useIntlayer('tech');

  return (
    <section id="process" className="section-padding px-4 sm:px-6 bg-paper-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-ink mb-3 sm:mb-4">
            {heading}
          </h2>
          <p className="text-lg sm:text-xl text-ink-lighter">
            {subheading}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid sm:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-8 sm:gap-y-12">
          {steps.map((step: { number: string; title: string; description: string }, index: number) => (
            <div
              key={step.number}
              className="relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="text-5xl sm:text-7xl font-display font-semibold text-accent/10 mb-3 sm:mb-4">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-ink mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-lighter leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-ink/10">
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-ink mb-6 sm:mb-8">
            {techHeading}
          </h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {techItems.map((tech: string) => (
              <span
                key={tech}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-paper text-ink-lighter rounded-full border border-ink/5 hover:border-accent/30 hover:text-accent transition-all text-sm sm:text-base"
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
