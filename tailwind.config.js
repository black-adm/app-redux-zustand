/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#f8edeb',
        'primary-gray': '#e3d5ca',
        'dark-primary': '#14213d',
        'medium-primary': '#22223b',
        'condensed-primary': '#2f2235',
        'light-primary': '#4a4e69'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

