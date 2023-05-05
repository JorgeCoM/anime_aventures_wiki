/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: { 
        fontFamily: {
          sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        }
      },
    },
    plugins: [
      require('flowbite/plugin'),
      [require("daisyui")]
    ],
  }