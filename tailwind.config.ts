module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree-Regular'],
      },
      colors: {
        'tertiary': '#414E62',
        'background-tertiary': '#F2F4F7',
        'menu-active': '#003366',
        'menu-disabled': '#637083'
      }
    }
  },
  plugins: []
}
