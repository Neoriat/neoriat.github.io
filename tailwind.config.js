/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "./*.html"],
  theme: {
    extend: {
      colors: {
        'fav-gray': '#181a1b',
        "fav-white": '#8c8273'
      },
    },
  },
  plugins: [],
}

