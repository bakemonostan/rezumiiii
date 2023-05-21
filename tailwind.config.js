/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/*.{js,vue}",
    "./layouts/*.vue",
    "./components/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        deepgreen: "#014B4B",
        bgreen: "#25AAAA",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
