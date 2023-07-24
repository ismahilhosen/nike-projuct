/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans,
        ],

      },
      colors: {
        primary: "#FA804C",
        primary_o: "#FFF9F4",
        secandary: "#3A4AD8",
        
      }


    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      }
    },

    plugins: [],
  }
}
