/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark romantic theme
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Main purple
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          red: '#ef4444',
          pink: '#ec4899',
          rose: '#f43f5e',
        },
        dark: {
          bg: '#0f0f0f',
          card: '#1a1a1a',
          border: '#2d2d2d',
          text: '#e0e0e0',
        },
      },
      backgroundColor: {
        'dark-base': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'dark-hover': '#242424',
      },
      borderColor: {
        'dark-border': '#2d2d2d',
      },
      textColor: {
        'dark-primary': '#e0e0e0',
        'dark-secondary': '#b0b0b0',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
