/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inika: ['Inika', 'serif'], // Add the Inika font as "inika" family
      },
      colors: {
        customGreen: '#008768',// Custom green color
        customgray: '#FBFAFA',
        lightgreen: '#85F085',
        lightgray:'#D9D9D9',
  
      },
    },
  },
  plugins: [],
}