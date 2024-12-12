/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./*.html"],
  theme: {
    extend: {
      colors: {
        'fav-gray': '#181a1b',
      },
    },
  },
  plugins: [],
}

