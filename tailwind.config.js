/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // better coverage for React
    theme: {
      extend: {
        fontFamily: {
          mono: ['Fira Code', 'monospace'],
        },
        colors: {
          primary: "#010C15",
          secondary: "#011627",
          line: '#133954',
          intermediate: '#10b981',
          bluish: '#4E5CD1',
          string: "#D2857E"
        },
      },
    },
    plugins: [],
};