/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#A8E6CF",
        "secondary":"#5C9E7E",
        "Accent-color":"#FFEB3B"
      }
    },
  },
  plugins: [],
}

