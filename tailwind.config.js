/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ADD8E6",
        secondary: "#333333",
        tertiary: "#108fa9"
      }
    },
  },
  plugins: [],
}

