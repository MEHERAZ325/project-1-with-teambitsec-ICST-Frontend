/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '350px', // Custom breakpoint
      },
      backgroundImage: {
        'black-deepblue': 'linear-gradient(135deg, #000000, #000080)',
      },
    },
  },
  plugins: [],
}

