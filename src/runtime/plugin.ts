import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  const config = _nuxtApp.$config.public.reverbConfig
  useState('reverbConfig', () => config)
})
