/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'primary-color': '#0d1b2a',
        'secondary-color': '#1b263b',
        'third-color': '#415a77',
        'fourth-color': '#778da9',
        'fifth-color': '#ced4da',
      }
    },
  },
  plugins: [
    
   
  ],
}