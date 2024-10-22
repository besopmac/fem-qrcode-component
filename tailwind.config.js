const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        slate:{
          '300': '#D5E1EF',
          '500': '#68778D',
          '900': '#1F314F'
        }
      }
    },
  },
  plugins: [],
}

