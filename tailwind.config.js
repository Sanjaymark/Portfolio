/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: 
      [
        {
          mytheme: 
          {
          
              "primary": "#570df8",
          
              "secondary": "#f000b8",
          
              "accent": "#1dcdbc",
          
              "neutral": "#2b3440",
          
              "base-100": "#ffffff",
          
              "info": "#3abff8",
          
              "success": "#36d399",
          
              "warning": "#fbbd23",
          
              "error": "#f87272",
          },
        },
      ],
    },
    
  },
  plugins: [require("daisyui")],
}