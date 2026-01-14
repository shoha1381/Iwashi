/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4ff',
          100: '#b3dfff',
          200: '#80caff',
          300: '#4db5ff',
          400: '#1aa0ff',
          500: '#0088ff',
          600: '#006dd9',
          700: '#0052b3',
          800: '#00378c',
          900: '#001c66',
        },
        neutral: {
          50: '#f5f7fa',
          100: '#ebeef2',
          200: '#d8dde6',
          300: '#c4ccd9',
          400: '#9ca8b9',
          500: '#7a8899',
          600: '#5e6367',
          700: '#4a4e52',
          800: '#36393c',
          900: '#222426',
        },
        schedule: {
          pink: '#ffd5dd',
          purple: '#e5d2ec',
          green: '#e5f2e5',
          orange: '#fde5cc',
          gray: '#f9f9fb',
        }
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'nav': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
};
