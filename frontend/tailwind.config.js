const path = require('path');
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    '/graphql': {
      target: 'http://localhost:4000/graphql'
    }
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
