/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F2AA4C",
        secondary: "#FFFF",
        // ...
      },
      fontFamily: {
        // SF Pro Display (Local)
        "sf-pro": ["SF Pro Display", ...fontFamily.sans],

        // AR One Sans (Google Font)
        "ar-one-sans": ["AR One Sans Variable", ...fontFamily.sans],

        // Inter (Google Font)
        inter: ["Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [tailwindScrollbar, require("@tailwindcss/typography")],
};
