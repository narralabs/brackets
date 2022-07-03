/* eslint-disable import/no-extraneous-dependencies */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    // Enable this in production
    // enabled: true,
    content: [
      './src/**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
