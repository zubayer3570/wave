/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-1": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        "custom-2": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      colors: {
        "text-color-1": "#486A6F",
        "text-color-2": "#678C92",
      }
    }
  },
  plugins: [],
}
