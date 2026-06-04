/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coala: {
          cyan: '#00FFFF',
          purple: '#8B5CF6',
          dark: '#0A0A0F',
          darker: '#050508',
          light: '#F8FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 255, 255, 0.4), 0 0 20px rgba(0, 255, 255, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
};
