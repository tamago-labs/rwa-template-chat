/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
        '70': '17.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
}