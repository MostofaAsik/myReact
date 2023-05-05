/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  themes: [
    {
      mytheme: {

        "primary": "#f4ef9f",

        "secondary": "#a3103e",

        "accent": "#63f210",

        "neutral": "#252632",

        "base-100": "#3B3B45",

        "info": "#1659E9",

        "success": "#47DCA3",

        "warning": "#A15402",

        "error": "#EE482B",
      },
    },
  ],
  plugins: [require("daisyui")],
}
