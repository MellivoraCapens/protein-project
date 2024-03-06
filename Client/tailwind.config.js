/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      fontFamily: {
        sans: ['"Roboto"'],
      },
      colors: {
        "pro-black": "#0A0C08",
        "pro-white": "#F3FCF0",
        "pro-grey": "#1F271B",
        "pro-red": "#F95738",
        "pro-yellow": "#F5B700",
      },
    },
  },
  plugins: [],
};
