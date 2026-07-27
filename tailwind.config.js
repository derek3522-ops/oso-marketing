/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'oso-orange': '#FF7A3D',
        'oso-dark': '#1a1a1a',
        'oso-black': '#000000',
      },
    },
  },
  plugins: [],
}
