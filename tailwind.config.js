/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-blue': {
          900: '#0B1120',
          800: '#111827',
          700: '#1E293B',
          600: '#2D3748',
        },
        accent: {
          primary: '#60A5FA',
          secondary: '#93C5FD',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};