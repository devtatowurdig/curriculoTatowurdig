/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dce6fd',
          200: '#b9ccfb',
          300: '#8aaff8',
          400: '#5d8ef4',
          500: '#3b6ef0',
          600: '#2451e4',
          700: '#1c3ecb',
          800: '#1c34a4',
          900: '#1c2f81',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

