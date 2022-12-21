export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@privyid/persona',
  ],
  vite   : {
    optimizeDeps: {
      include: [
        '@testing-library/user-event',
        'interactjs',
        'webfontloader',
        'zxcvbn'
      ]
    }
  },
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
