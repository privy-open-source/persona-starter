export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@privyid/pong',
    '@privyid/persona',
    '@privyid/persona-icon',
    '@privyid/nhp',
    '@privyid/nuapi',
  ],
  css    : ['~/assets/css/tailwind.css', '~/assets/css/style.css'],
  postcss: {
    plugins: {
      'postcss-hexrgba'       : {},
      'tailwindcss/nesting'   : {},
      'tailwindcss'           : {},
      'postcss-lighten-darken': {},
      'autoprefixer'          : {},
    },
  },
  pinia     : { autoImports: ['defineStore', 'storeToRefs'] },
  typescript: {
    tsConfig: {
      compilerOptions: {
        strict          : false,
        strictNullChecks: true,
      },
    },
  },
})
