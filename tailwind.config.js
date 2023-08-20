/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundColorWhite: '#FFFFFF',
        color: '#FFFFFF',
        primary: '#A82825',
        colorText: '#A82825',
        colorTextGrey: '#888888'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        BeautiqueDisplay: ['BeautiqueDisplay', ' Tahoma', 'sans-serif'],
        BeautiqueDisplayMedium: ['BeautiqueDisplayMedium', ' Tahoma', 'sans-serif'],
        Inter: ['inter', ' Tahoma', 'sans-serif'],
        interRegular: ['interRegular', ' Tahoma', 'sans-serif'],
        interBold: ['interBold', ' Tahoma', 'sans-serif'],
        interBoldSemiBold: ['interBoldSemiBold', ' Tahoma', 'sans-serif'],
        inter500: ['inter500', ' Tahoma', 'sans-serif']
      },
      lineClamp: {
        8: '8',
        12: '12'
      },
      screens: {
        sm: { min: '100px', max: '647px' }
      }
    }
  },
  plugins: []
}
