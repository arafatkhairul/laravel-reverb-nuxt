<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Description: My new Nuxt module
-->

# Laravel Reverb Nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

🔥 The Simplified Laravel Reverb Plugin for - Nuxt JS!

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->
- ⛰ &nbsp;Larvel Reverb
- 🚠 &nbsp;Realtime
- 🌲 &nbsp;Easy to use

## Quick Setup

Install the plugin to your Nuxt application with one command:

```bash
yarn add laravel-reverb-nuxt
# or
npm i laravel-reverb-nuxt
```

That's it! You can now use Laravel Reverb Nuxt in your Nuxt app ✨

You can also define options as below (defaults in example):

```js
export default defineNuxtConfig({
  // ...
  modules: [
    'laravel-reverb-nuxt'
    // ...
  ],
  reverbConfig: {
    REVERB_APP_ID: '222100',
    REVERB_APP_KEY: 'al6dfmhmr3oxqgbgpyht',
    REVERB_APP_SECRET: 'vpdu8yljg6npzejzl0vi',
    REVERB_HOST: 'localhost',
    REVERB_PORT: 8080,
    REVERB_SCHEME: 'http'
  }
})
```

## Usage

```vue
<template>
  <div>
    Laravel Reverb Nuxt
  </div>
</template>

<script setup>
onMounted(() => {
  reverb().channel('chat').listen('Example', (event) => {
    console.log(event);
    // Start your logic here 
  });
})
</script>
```
