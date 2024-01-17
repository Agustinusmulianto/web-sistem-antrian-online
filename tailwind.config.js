/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        utama: '#1D2B53',
        kedua: '#7E2553',
        ketiga: '#FF004D',
        keempat: '#FAEF5D',
      },

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

