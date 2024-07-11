export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-07-11',
  reverbConfig: {
    REVERB_APP_ID: '222100',
    REVERB_APP_KEY: 'al6dfmhmr3oxqgbgpyht',
    REVERB_APP_SECRET: 'vpdu8yljg6npzejzl0vi',
    REVERB_HOST: 'localhost',
    REVERB_PORT: 8080,
    REVERB_SCHEME: 'http'
  }
})
