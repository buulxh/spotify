/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsc}", 
  ],
  theme: {
    extend: {
      height: {
        'screen-navbar-player': 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
}
