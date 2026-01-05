import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Refined, professional palette
        ink: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#4a4a4a',
        },
        paper: {
          DEFAULT: '#fafaf9',
          dark: '#f5f5f4',
        },
        accent: {
          DEFAULT: '#2563eb', // Trustworthy blue
          light: '#3b82f6',
          dark: '#1e40af',
        },
        sage: {
          DEFAULT: '#4a5d54',
          light: '#6b7f75',
        }
      },
      fontFamily: {
        // Distinctive typography
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
