/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"]
      },
      colors: {
        cream: "#FFFDF8",
        sand: "#F7F2EA",
        graphite: "#1F2423",
        gold: "#C9A45C",
        teal: "#0F3D3E"
      }
    }
  },
  plugins: []
};
