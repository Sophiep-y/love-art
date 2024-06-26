/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#9E9E9E",
      black: "#000000",
      white: "#ffffff",
      solidLove: "#C9C9C9",
      modalShadowColor: "#82828233",
      red: "#ff0000",
    },
    fontFamily: {
      body: ["Helvetica Neue"],
    },
    extend: {
      boxShadow: {
        recommendation: "-10px 10px 20px -11px rgba(86, 86, 86, 0.60)",
        values: "0px -6px 15px -8px rgba(0, 0, 0, 0.25)",
      },
    },
  },

  plugins: [],
};
