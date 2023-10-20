/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      colors: {
        'main': '#F1582B',
        'second': '#EFF3EA',
      },
    },
  },
  plugins: [require("daisyui")],
}

