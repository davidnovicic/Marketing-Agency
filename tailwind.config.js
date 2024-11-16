/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8EFE0",
        secondary: "#36332E",
        third: "#293463",
        myOrange: "#DB8011",
        myGreen: "#2C8A9D",
      },
    },
    screens: {
      "2xl": "1536px",

      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "768px" },

      sm: { max: "640px" },
    },
  },
  plugins: [],
};
