/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bone: '#F1EDE4',
        bone2: '#F8F6F2',
        orange: '#ff7f50',
        orangeHover: '#ff4500',
        eblack: '#1c1d1cff'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        hoverBoton: {
          'from': {
            width: '33%'
          },
          'to': {
            width: '35%'
          }
        },
        hoverBotonReverse: {
          'from': {
            width: '35%'
          },
          'to': {
            width: '33%'
          }
        }
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        scroll2: 'scroll 8s linear infinite',
        hoverBoton: 'hoverBoton 0.3s ease-in-out forwards',
        hoverBotonReverse: 'hoverBotonReverse 0.2s ease-in-out forwards',
      },
    },
  },
    // add daisyUI plugin
    plugins: [
      require("daisyui"),
      require('autoprefixer'),

    ],

    // daisyUI config (optional - here are the default values)
    daisyui: {
      themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
      darkTheme: "dark", // name of one of the included themes for dark mode
      base: true, // applies background color and foreground color for root element by default
      styled: true, // include daisyUI colors and design decisions for all components
      utils: true, // adds responsive and modifier utility classes
      prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
      logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
      themeRoot: ":root", // The element that receives theme color CSS variables
    },
}
