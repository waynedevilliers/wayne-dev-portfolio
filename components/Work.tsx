'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Work() {
  const { content } = useLanguage();

  return (
    <section id="work" className="section-padding px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            {content.work.heading}
          </h2>
          <p className="text-xl text-ink-lighter">
            {content.work.subheading}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {content.work.projects.map((project, index) => (
            <article
              key={project.title}
              className="group grid md:grid-cols-12 gap-8 items-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="md:col-span-5 aspect-[4/3] bg-gradient-to-br from-sage/20 to-accent/10 rounded-2xl overflow-hidden border border-ink/5">
                <div className="w-full h-full flex items-center justify-center text-ink/20 font-display text-6xl">
                  {index + 1}
                </div>
              </div>

              {/* Project Info */}
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-medium text-accent">
                    {project.year}
                  </span>
                  <span className="text-ink/20">•</span>
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-ink/5 text-ink-lighter rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-display font-semibold text-ink mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-lg text-ink-lighter leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.link && project.link !== '#' ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    {content.work.linkText}
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-ink/40 font-medium">
                    {content.work.comingSoonText || 'Coming soon'}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
