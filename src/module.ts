import { defineNuxtModule, createResolver, addPlugin, addImports } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'laravel-reverb-nuxt',
    configKey: 'reverbConfig',
  },

  defaults: {},
  setup(options, nuxt) {

    nuxt.options.runtimeConfig.public.reverbConfig = options;
    const { resolve } = createResolver(import.meta.url)

    addPlugin(resolve('./runtime/plugin'))

    addImports({
      name: 'reverb',
      as: 'reverb',
      from: resolve('runtime/composables')
    })
  },
})
