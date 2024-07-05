/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-color": "#FFFFFF",
        "light-blue-color": "#0D0D0D",

      },
      backgroundColor: {
        "primary-color": "#212529",
        "secandory-color": "#343A40",
        "hover-bg": 'rgba(128, 128, 128, 0.105)',
        "green": '#2ECC71 '
      },
      fontFamily: {
        "text-family": "Poppins, sans-serif",
        "heading-family": "Nunito, sans-serif"
      }
    },
  },
  plugins: [],
}
