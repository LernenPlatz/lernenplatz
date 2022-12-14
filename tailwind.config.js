/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       lobster: ['Lobster', 'cursive'],
       caveat:['Caveat', 'cursive'],
       noto:['Noto Sans JP', 'sans-serif'],
       sora:['Sora', 'sans-serif'],
       outfit:['Outfit', 'sans-serif']
      }
    }
  },
  plugins: [],
}
