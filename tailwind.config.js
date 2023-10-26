import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
        colors: {
            "dark-space" : '#120D11',
            "blue-space" : '#202133',
            "light-space" : '#667090',
        },
        fontFamily: {
          sjRegular: 'Star Jedi Regular',
          sjHollow: 'Star Jedi Hollow',
          sjOutline: 'Star Jedi Outline',
        }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ]
}

