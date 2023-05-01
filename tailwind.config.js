/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d32f2f",
        secondary: "#f5f5f5",
        accent: "#ffc107",
        background: "#121212",
        text: "#ffffff",
      },
    },
  },
};
