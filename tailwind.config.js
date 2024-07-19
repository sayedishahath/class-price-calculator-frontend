/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        customBlue: '#3b82f6'
      },
      backgroundImage: {
        'calculator-gradient': 'linear-gradient(to bottom, #ff69b4, #ff99cc)',
      },
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

