/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  //daisy UI plugins 
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui:{
    themes:['winter', 'night']
  }
}

