const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors, // Corrected 'defaultTheme' here
        dark: {
          600: "#000000",
          500: "#b4b4b4",
          400: "#2a2a2a",
          300: "#233044",
          200: "#364B6A",
          100: "#3e567b",
        },
        light: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#ecf6ff",
        },
        blue: "#228be6",
        red: "#e03131",
        white: "#ffffff",
        black: "#000000",
        primary: "#00549c",
        secondary: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
