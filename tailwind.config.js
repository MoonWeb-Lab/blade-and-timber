/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0D0E',
          surface: '#121517',
          card: '#181C20',
          elevated: '#20252B',
          border: 'rgba(255, 255, 255, 0.08)',
          gold: '#C5A059',
          'gold-light': '#E2C27F',
          'gold-dark': '#A37E36',
          bronze: '#8C6239',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Cinzel', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
        'gold-sm': '0 0 15px -3px rgba(197, 160, 89, 0.15)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
