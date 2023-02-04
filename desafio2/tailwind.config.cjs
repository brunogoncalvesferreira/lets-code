/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "lato",
      serif: "Crimson Pro",
    },
    width: {
      500: "500px",
      140: "140px",
    },
  },
  plugins: [],
}
