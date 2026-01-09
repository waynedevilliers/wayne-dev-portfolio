import { render, screen, fireEvent } from '@testing-library/react';
import Work from '../Work';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { allContent } from '@/content';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, priority, onError, fill, sizes, className, ...rest } = props;
    return (
      <img
        src={src}
        alt={alt}
        data-priority={priority ? 'true' : 'false'}
        data-fill={fill ? 'true' : 'false'}
        onError={onError}
        className={className}
        {...rest}
      />
    );
  },
}));

describe('Work Component', () => {
  describe('Structure and Layout', () => {
    it('renders the work section with proper semantic structure', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Check for section with proper ID
      const section = container.querySelector('section#work');
      expect(section).toBeInTheDocument();

      // Check for heading (language-agnostic)
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
      expect(headings[0]).toBeInTheDocument();
    });

    it('renders all 5 project cards as articles', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Query by semantic article elements (language-agnostic)
      const projectArticles = container.querySelectorAll('article');
      expect(projectArticles).toHaveLength(5);
    });

    it('applies mobile responsive classes to section', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const section = container.querySelector('section');
      expect(section).toHaveClass('px-4', 'sm:px-6');
      expect(section).toHaveClass('section-padding');
    });

    it('applies responsive typography classes to heading', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const heading = screen.getAllByRole('heading')[0];
      expect(heading).toHaveClass('text-3xl', 'sm:text-4xl', 'md:text-5xl');
    });
  });

  describe('Content Rendering - English', () => {
    it('renders English content correctly', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Verify English content from content.ts
      expect(screen.getByText(allContent.en.work.heading)).toBeInTheDocument();
      expect(screen.getByText(allContent.en.work.subheading)).toBeInTheDocument();

      // Check all project titles
      allContent.en.work.projects.forEach(project => {
        expect(screen.getByText(project.title)).toBeInTheDocument();
      });
    });

    it('renders new projects with correct English descriptions', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // ELLU Studios Fashion Assistant
      expect(screen.getByText(/AI-powered chatbot/i)).toBeInTheDocument();
      expect(screen.getByText('OpenAI GPT-4o')).toBeInTheDocument();

      // Mainflug Drone Services
      expect(screen.getByText(/Professional drone services platform/i)).toBeInTheDocument();
    });
  });

  describe('Image System', () => {
    it('renders images with correct PNG paths', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const images = screen.getAllByRole('img');

      // Verify all 5 images have correct PNG paths
      expect(images[0]).toHaveAttribute('src', '/images/projects/ellu-studios.png');
      expect(images[1]).toHaveAttribute('src', '/images/projects/culture-academy.png');
      expect(images[2]).toHaveAttribute('src', '/images/projects/musikleben.png');
      expect(images[3]).toHaveAttribute('src', '/images/projects/ellu-studios-fashion-assistant.png');
      expect(images[4]).toHaveAttribute('src', '/images/projects/mainflug-drone-services.png');
    });

    it('sets priority prop only on first image for LCP optimization', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const images = screen.getAllByRole('img');

      // First image should have priority=true
      expect(images[0]).toHaveAttribute('data-priority', 'true');

      // Remaining images should have priority=false (lazy loaded)
      for (let i = 1; i < images.length; i++) {
        expect(images[i]).toHaveAttribute('data-priority', 'false');
      }
    });

    it('generates correct image paths from project titles', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const images = screen.getAllByRole('img');

      // Test that special characters and spaces are handled correctly
      // "ELLU Studios Fashion Assistant" -> "ellu-studios-fashion-assistant.png"
      expect(images[3]).toHaveAttribute('src', '/images/projects/ellu-studios-fashion-assistant.png');

      // "Mainflug Drone Services" -> "mainflug-drone-services.png"
      expect(images[4]).toHaveAttribute('src', '/images/projects/mainflug-drone-services.png');
    });

    it('displays fallback placeholder when image fails to load', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const firstImage = screen.getAllByRole('img')[0];

      // Trigger the onError callback
      fireEvent.error(firstImage);

      // After error, fallback should display (numbered placeholder)
      // The fallback is a div with the index number
      const placeholders = container.querySelectorAll('.text-ink\\/20');
      expect(placeholders.length).toBeGreaterThan(0);
    });

    it('passes correct alt text to images', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const images = screen.getAllByRole('img');

      // Verify alt text matches project titles
      expect(images[0]).toHaveAttribute('alt', 'ELLU Studios');
      expect(images[1]).toHaveAttribute('alt', 'Culture Academy');
      expect(images[2]).toHaveAttribute('alt', 'Musikleben');
      expect(images[3]).toHaveAttribute('alt', 'ELLU Studios Fashion Assistant');
      expect(images[4]).toHaveAttribute('alt', 'Mainflug Drone Services');
    });
  });

  describe('Project Links', () => {
    it('displays project links with proper security attributes', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const viewSiteLinks = screen.getAllByRole('link', { name: /View site|Website ansehen/i });

      // All project links should have proper attributes for security
      viewSiteLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });

      // Verify we have at least 4 working links (5 projects, but one might not have URL)
      expect(viewSiteLinks.length).toBeGreaterThanOrEqual(4);
    });

    it('renders correct URLs for each project', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Check that all projects with URLs are rendered correctly
      const allLinks = screen.getAllByRole('link', { name: /View site|Website ansehen/i });
      const elluLink = allLinks.find(link => link.getAttribute('href')?.includes('ellustudios.com'));
      expect(elluLink).toBeInTheDocument();

      // Verify other project URLs as well
      const cultureLink = allLinks.find(link => link.getAttribute('href')?.includes('culture-academy.org'));
      expect(cultureLink).toBeInTheDocument();

      const droneLink = allLinks.find(link => link.getAttribute('href')?.includes('drone-services-pro'));
      expect(droneLink).toBeInTheDocument();
    });
  });

  describe('Tech Badges', () => {
    it('limits tech badges to first 2 technologies per project', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Get all project articles
      const projectArticles = container.querySelectorAll('article');

      projectArticles.forEach((article, index) => {
        // Find tech badges within this specific project article
        const techBadges = article.querySelectorAll('.rounded-full.bg-ink\\/5');

        // Each project should show at most 2 tech badges
        expect(techBadges.length).toBeLessThanOrEqual(2);

        // For projects with more than 2 technologies, verify only first 2 are shown
        const project = allContent.en.work.projects[index];
        if (project.tech.length > 2) {
          expect(techBadges.length).toBe(2);

          // Verify the first 2 tech items are displayed
          expect(article.textContent).toContain(project.tech[0]);
          expect(article.textContent).toContain(project.tech[1]);

          // Verify the 3rd tech item is NOT displayed
          if (project.tech[2]) {
            const thirdTech = project.tech[2];
            // The third tech should not be in the badge section
            const techContainer = article.querySelector('.flex.flex-wrap.gap-2');
            expect(techContainer?.textContent).not.toContain(thirdTech);
          }
        }
      });
    });

    it('displays correct technologies for new projects', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // ELLU Fashion Assistant shows Next.js and OpenAI GPT-4o (first 2)
      expect(screen.getAllByText('Next.js').length).toBeGreaterThan(0);
      expect(screen.getByText('OpenAI GPT-4o')).toBeInTheDocument();

      // Mainflug shows Next.js and React (first 2)
      expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    });
  });

  describe('Project Metadata', () => {
    it('renders project years correctly', () => {
      render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Check years are displayed
      expect(screen.getByText('Current')).toBeInTheDocument();
      expect(screen.getByText('Ongoing')).toBeInTheDocument();
      expect(screen.getByText('2024-2025')).toBeInTheDocument();
      expect(screen.getAllByText('2025')).toHaveLength(2); // Two 2025 projects
    });

    it('displays year badges with proper styling', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      // Year badges should have accent color
      const yearBadges = container.querySelectorAll('.text-accent');
      expect(yearBadges.length).toBeGreaterThanOrEqual(5); // One per project
    });
  });

  describe('Responsive Grid Layout', () => {
    it('applies responsive grid classes to project cards', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const projectArticles = container.querySelectorAll('article');

      projectArticles.forEach(article => {
        // Each article should have responsive grid classes
        expect(article).toHaveClass('md:grid-cols-12');
        expect(article).toHaveClass('gap-6', 'sm:gap-8');
      });
    });

    it('applies staggered animation delays to projects', () => {
      const { container } = render(
        <LanguageProvider>
          <Work />
        </LanguageProvider>
      );

      const projectArticles = container.querySelectorAll('article');

      projectArticles.forEach((article, index) => {
        const style = article.getAttribute('style');
        expect(style).toContain(`animation-delay: ${index * 0.1}s`);
      });
    });
  });
});
