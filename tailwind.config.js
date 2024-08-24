/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-main": "#050505",
        "green-main": "#284135",
        "red-main": "#a95f4d",
        "white-main": "#F3F2F1",
        "yellow-main": "#d0a465",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        baskervville: ["Baskervville SC", "sans"],
      }
    },
  },
  plugins: [],
};
