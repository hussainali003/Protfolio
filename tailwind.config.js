/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // better coverage for React
    theme: {
      extend: {
        fontFamily: {
          mono: ['Fira Code', 'monospace'],
        },
        colors: {
          primary: "#0f172a",
        },
      },
    },
    plugins: [],
};