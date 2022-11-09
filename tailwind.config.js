/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-btn": "#384564",
        "grey-fill": "#70778B",
        "light-blue-app-bg": "#E6E9F2",
        //"dark-blue-text": "#3A4562",
        "light-grey-txt": "#878D9D",
      },
    },
  },
  plugins: [],
};
