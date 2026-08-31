<script setup>
import { onMounted, onUnmounted, onUpdated, nextTick } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ApproachSection from './components/ApproachSection.vue'
import CertificatesSection from './components/CertificatesSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

let observer

function observeReveals() {
  document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
    observer.observe(el)
  })
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
  )

  observeReveals()
})

onUpdated(() => {
  nextTick(observeReveals)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ApproachSection />
    <CertificatesSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
