/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Covers everything in the src folder, including components, pages, etc.
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#DF4718',
      },
    },
  },
  plugins: [],
}

