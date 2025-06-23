/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      auto: "repeat(auto-fit, minmax(200px, 1fr))",
    },
    fontFamily: {
      Outfit: ["Outfit", "sans - serif"],
      Ovo: ["Ovo", "serif"],
    },

    animation: {
      spin_slow: "pulse 2s linear infinite",
    },

    extend: {
      colors: {
        darkTheme: "#11001F",
      },
      darkMode: "selector",
    },
  },
  plugins: [],
};
