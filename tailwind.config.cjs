module.exports = {
  content: ['./src/**/*.svelte', './src/**/*.css'],
  theme: {
    extend: {
      boxShadow: {
        'custom': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
