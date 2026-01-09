import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Hero Component', () => {
  it('renders the hero section with the correct content', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    // Check for the title
    expect(screen.getByText('Web Developer & Designer')).toBeInTheDocument();

    // Check for the main heading
    expect(screen.getByRole('heading', { name: /wayne \.dev/i })).toBeInTheDocument();

    // Check for the subtitle
    expect(screen.getByText(/by Wayne de Villiers/i)).toBeInTheDocument();

    // Check for the description
    expect(screen.getByText(/I build professional websites/i)).toBeInTheDocument();

    // Check for the call to action button
    expect(screen.getByRole('link', { name: /Let's work together/i })).toBeInTheDocument();
  });
});
