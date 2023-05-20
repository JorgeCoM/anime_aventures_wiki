/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js"
    ],
    theme: {
      extend: { 
        fontFamily: {
          // sans: ['Inter var', ...defaultTheme.fontFamily.sans],    
        }
      },
    },
    plugins: [
      require("daisyui"),
      require("tw-elements/dist/plugin.cjs"),
      require('preline/plugin')
    ],
    daisyui: {
      styled: true,
      themes: true,
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      darkTheme: "dark",
    },
  }