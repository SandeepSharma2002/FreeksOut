/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Nunito: "Nunito"
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 25s linear infinite",
        slideUp: "slideUp .6s ease-out forwards 1.8s",
        slideLeft: "slideLeft 1s ease-out forwards .8s",
        slideLeft1: "slideLeft 1s ease-out forwards 1.3s",
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        },
        slideUp: {
          'to':{
            opacity:1,
            transform: 'translate(0)'
          },
        },
        slideLeft: {
          
          '60%':{
            opacity:1,
            transform: 'translate(10px)'
          },
          '80%':{
            opacity:1,
            transform: 'translate(-6px)'
          },
          '90%':{
            opacity:1,
            transform: 'translate(4px)'
          },
          '100%':{
            opacity:1,
            transform: 'translate(0)'
          },
        }
      }
    },screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}