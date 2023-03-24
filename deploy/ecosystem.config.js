module.exports = {
  apps: [
    {
      name     : 'NuxtApp',
      exec_mode: 'cluster',
      instances: 'max',
      script   : './.output/server/index.mjs',
    },
  ],
}
