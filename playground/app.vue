<template>
  <div>
    Laravel Reverb Nuxt
  </div>
</template>

<script setup>
onMounted(() => {
  reverb().channel('chat').listen('Example', (event) => {
    console.log(event)
  })
})
</script>
