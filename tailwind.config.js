/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
    screens: {
      mobile: "0",
      tablet: "1024px",
      desktop: "1500px",
    },
  },
  plugins: [],
};
