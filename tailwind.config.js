/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        purple: 'var(--color-purple)',
      },
      boxShadow: {
        banner: 'var(--banner-shadow)',
        timeline: 'var(--timeline-shadow)',
      },
    },
  },
  plugins: [],
};
