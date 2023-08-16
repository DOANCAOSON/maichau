/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColorWhite: "#FFFFFF",
        color: "#FFFFFF",
        primary: '#A82825',
        colorText: "#A82825",
        colorTextGrey: "#888888",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'BeautiqueDisplay': ['BeautiqueDisplay', ' Tahoma', 'sans-serif'],
        'BeautiqueDisplayMedium': ['BeautiqueDisplayMedium', ' Tahoma', 'sans-serif'],
        'Inter': ['inter', ' Tahoma', 'sans-serif'],
        'interRegular': ['interRegular', ' Tahoma', 'sans-serif'],
        'interBold': ['interBold', ' Tahoma', 'sans-serif'],
        'interBoldSemiBold': ['interBoldSemiBold', ' Tahoma', 'sans-serif'],

      },
      screens: {
        'sm': '100px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}