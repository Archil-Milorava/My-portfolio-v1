/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#050505",
        "green-main": "#226160",
        "red-main": "#a95f4d",
        "white-main": "#fdf6eb",
        "yellow-main": "#d0a465",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
