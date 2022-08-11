/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blueTitle: '#1D96FF',
      },
      borderRadius: {
        p48: '48px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
