/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        "custom-1": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px"
      }
    },
  },
  plugins: [],
}
