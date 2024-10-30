/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:'#223240',
        redblue:'#302f39',
        shadedpink:'#d4ac8e',
        lightsaturate:'#e4ded5',
        shadedorange:'#b55730', 
        lightorange:'#c47d57',
        primarypink:'#d90f54'

      },
      fontFamily: {
        sans: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces72ptsupersoft: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces144ptsupersoft: ['Fraunces144ptsupersoft', 'serif'],
        Geomanist: ['Geomanist', 'serif'],
        Geomanist_ultra: ['Geomanist ultra','serif'],
      },
      backgroundSize:{
        '50':'50px',
      },
      backgroundImage:{
        'shaded': "url('/buttonbg.webp')",
        'primary': "url('/cardshade.webp')"
      },
      boxShadow:{
       'primary': '0 10px 24px 0 rgb(45 72 80 / 60%)',
       'secondary':'0 10px 24px 0 rgb(45 72 80 / 70%)',
       'orange': '0 10px 24px 0 rgb(196 125 87 / 90%)',
       'light':'0 10px 24px 0 rgb(196 125 87 / 80%)'

      }
    },
  },
  plugins: [],
}
