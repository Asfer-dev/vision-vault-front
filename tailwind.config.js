/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#ffdd59",
        primary: "#ebca47",
        secondary: "#ff66c4",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        logo: ["Exo 2", "sans-serif"],
      },
    },
  },
  plugins: [],
};
