/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primaryColor": "#ff5733",
      "secondaryColor": "#6c757d",

      "backgroundColor": "#e9edef",
      "white": '#ffffff',
      "textColor": "#333333",
      "secondaryText":"#818181",
      "linkColor": "#ff5733",

      "buttonColor": "#ff5733",
      "buttonTextColor": "#ffffff",

      "inputBackgroundColor": "#ffffff",
      "inputTextColor": "#333333",

      "borderColor": "#ced4da",
    },
  },
  plugins: [],
}