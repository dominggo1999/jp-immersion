/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
