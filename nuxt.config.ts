export default defineNuxtConfig({
  modules: ['@privyid/persona'],
  css    : ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      'postcss-hexrgba'       : {},
      'tailwindcss/nesting'   : {},
      'tailwindcss'           : {},
      'postcss-lighten-darken': {},
      'autoprefixer'          : {},
    },
  },
})
