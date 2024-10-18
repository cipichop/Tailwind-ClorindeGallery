/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'neutral': {
          50:"#fafafa",
          100:"#f5f5f5",
          200:"#e5e5e5",
          300:"#d4d4d4",
          400:"#a3a3a3",
          500:"#737373",
          600:"#525252",
          700:"#404040",
          800:"#262626",
          900:"#171717"
        },
        'stone': {
          50:"#fafaf9",
          100:"#f5f5f4",
          200:"#e7e5e4",
          300:"#d6d3d1",
          400:"#a8a29e",
          500:"#78716c",
          600:"#57534e",
          700:"#44403c",
          800:"#292524",
          900:"#1c1917"
        },
      },
      fontFamily: {
        'seymour': ['Seymour One', 'sans-serif']
      },
    },
  },
  plugins: [],
}

