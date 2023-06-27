/* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      colors: {
        buff: {
          primary: '#A59E8F',
          second: '#C1B9A9',
          tint: '#FFF7E6'
        }
      },
      minHeight: {
        10: '100px',
        20: '200px',
        30: '300px'
      },
      zIndex: {
        9999: 9999
      },
      // here's how to extend fonts if needed
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
