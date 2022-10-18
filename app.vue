<script setup>

useHead({
  title: 'Full Stack Developer',
  titleTemplate: (title) => `${title} - NAMDEVEL`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  lang: 'en',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'NAMDEVEL Personal Website.' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-png', href: '/favicon.png' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Secular+One&display=swap' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://site-assets.fontawesome.com/releases/v6.2.0/css/all.css' }
  ],
  script: [
    { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', body: true },
  ],
})
</script>
    
<template>
  <div class="mx-auto" style="max-width:680px">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>