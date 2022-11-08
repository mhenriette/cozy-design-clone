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

      },
      fontFamily: {
        sans: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces72ptsupersoft: ['Fraunces72ptsupersoft', 'serif'],
        Fraunces144ptsupersoft: ['Fraunces144ptsupersoft', 'serif'],
        Geomanist: ['Geomanist', 'serif'],
        Geomanist_ultra: ['Geomanist ultra','serif'],
      },
      backgroundImage:{
        'shaded': "url('/buttonbg.webp')"
      },
    },
  },
  plugins: [],
}
