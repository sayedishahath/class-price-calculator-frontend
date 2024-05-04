/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        lightBlue:"#A6B1E1"
      }
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
