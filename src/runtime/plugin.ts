import { defineNuxtPlugin, useState } from '#app'
import { useRuntimeConfig } from '@nuxt/kit'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = _nuxtApp.$config.public.reverbConfig;
  const reverbConfig = useState('reverbConfig', () => config);
})
