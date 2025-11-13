/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: [ '"Poppins"', "sans-serif" ],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}



//? sm  640px
//? md  768px
//? lg  1024px
//? xl  1280px
//? 2xl  1536px