<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { resetPageMeta, setPageMeta } from './lib/seo.js'

const route = useRoute()

watch(
  () => route.name,
  (name) => {
    if (name === 'blog') {
      setPageMeta({
        title: 'Blog | Özel Sağlık Hizmet Birimi',
        description:
          'Dil, konuşma ve iletişim gelişimi hakkında bilgilendirici yazılar. Karabük dil ve konuşma terapisti blog.',
      })
      return
    }

    resetPageMeta()
  },
  { immediate: true }
)
</script>

<template>
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
