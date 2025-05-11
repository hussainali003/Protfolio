/* eslint-disable no-undef */

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
          string: "#D2857E",
          const: "#2D7AD6",
          keyword: '#34B5FF',
          property: '#7CDCF1',
          function: '#D0cE81',
          condition: '#A463b3',
          number: '#6E7681',
          modified: '#fcca92',
        },
      },
    },
    plugins: [require('tailwind-scrollbar'),],
};