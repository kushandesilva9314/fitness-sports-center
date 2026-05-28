/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)"],
      },
      colors: {
        gold: "#C99A0E",
        "dark-brown": "#1E1A0E",
        "gym-black": "#050505",
        "dark-gray": "#2B2B2B",
        "off-white": "#F0EDE4",
      },
    },
  },
  plugins: [],
};