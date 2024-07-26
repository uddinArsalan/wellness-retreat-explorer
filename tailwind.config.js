/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : '#1B3252',
        secondary : '#E0D9CF'
      }
    },
  },
  plugins: [],
}