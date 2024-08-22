/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "310px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1300px",
    },

    fontFamily: {
      OpenSans: ["Open Sans", "sans-serif"],
      Lora: ["Lora", "serif"],
      Poppins: ["Poppins", "sans-serif"],
      PublicSans: ["Public Sans", "sans-serif"],
    },

    extend: {
      colors: {
        darkGreen: "#228B22",
        darkerGreen: "#1E531E",
        lightGreen: "#98FF98",
        white: "#fff",
        black: "#000",
        rating: "#FF9110",
        textColor: "#285434",
        lightTextColor: "#2F4F38",
        darkTextColor: "#2F4F4F",
        milkWhite: "#F8F8FF",
        productBg: '#F8F8F8',
    },
  },
  plugins: [],
};
