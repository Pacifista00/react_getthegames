/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('../public/images/cb.jpg')",
        chair: "url('../public/images/gamingchair.jpg')",
      },
    },
  },
  plugins: [],
};
