/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
      },
      colors: {
        'light-black': '#263238',
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'light-gray': '#F5F5F5',
        'mid-gray': '#8F95A5',
      },
    },
  },
  plugins: [],
}
