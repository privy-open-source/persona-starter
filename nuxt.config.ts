export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@privyid/persona',
    '@privyid/nhp/module',
  ],
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
